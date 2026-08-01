from sqlalchemy import select
from sqlalchemy.orm import Session

from app.exceptions import TaskNotFoundError
from app.models.project import Project
from app.models.task import Task
from app.models.user import User
from app.schemas.task import TaskCreate, TaskUpdate
from app.services.project_service import get_project_by_id


def create_task(
    db: Session,
    project_id: int,
    task_data: TaskCreate,
    current_user: User,
) -> Task:
    project = get_project_by_id(
        db=db,
        project_id=project_id,
        current_user=current_user,
    )

    task = Task(
        title=task_data.title,
        description=task_data.description,
        status=task_data.status,
        project_id=project.id,
    )

    db.add(task)
    db.commit()
    db.refresh(task)

    return task


def get_task_by_id(
    db: Session,
    task_id: int,
    current_user: User,
) -> Task:
    statement = (
        select(Task)
        .join(Project)
        .where(
            Task.id == task_id,
            Project.owner_id == current_user.id,
        )
    )

    result = db.execute(statement)

    task = result.scalar_one_or_none()

    if task is None:
        raise TaskNotFoundError()

    return task


def get_tasks_by_project(
    db: Session,
    project_id: int,
    current_user: User,
    skip: int = 0,
    limit: int = 100,
) -> list[Task]:
    project = get_project_by_id(
        db=db,
        project_id=project_id,
        current_user=current_user,
    )

    statement = (
        select(Task)
        .where(Task.project_id == project.id)
        .offset(skip)
        .limit(limit)
    )

    result = db.execute(statement)

    return result.scalars().all()


def update_task(
    db: Session,
    task_id: int,
    task_data: TaskUpdate,
    current_user: User,
) -> Task:
    task = get_task_by_id(
        db=db,
        task_id=task_id,
        current_user=current_user,
    )

    update_data = task_data.model_dump(exclude_unset=True)

    for field, value in update_data.items():
        setattr(task, field, value)

    db.commit()
    db.refresh(task)

    return task


def delete_task(
    db: Session,
    task_id: int,
    current_user: User,
) -> None:
    task = get_task_by_id(
        db=db,
        task_id=task_id,
        current_user=current_user,
    )

    db.delete(task)
    db.commit()