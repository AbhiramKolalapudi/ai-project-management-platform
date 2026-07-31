from sqlalchemy import select
from sqlalchemy.orm import Session

from app.exceptions import ProjectNotFoundError
from app.models.project import Project
from app.models.user import User
from app.schemas.project import ProjectCreate, ProjectUpdate


def create_project(
    db: Session,
    project_data: ProjectCreate,
    current_user: User,
) -> Project:
    project = Project(
        title=project_data.title,
        description=project_data.description,
        owner_id=current_user.id,
    )

    db.add(project)
    db.commit()
    db.refresh(project)

    return project


def get_projects(
    db: Session,
    current_user: User,
) -> list[Project]:
    statement = select(Project).where(
        Project.owner_id == current_user.id
    )

    result = db.execute(statement)

    return result.scalars().all()


def get_project_by_id(
    db: Session,
    project_id: int,
    current_user: User,
) -> Project:
    statement = select(Project).where(
        Project.id == project_id,
        Project.owner_id == current_user.id,
    )

    result = db.execute(statement)

    project = result.scalar_one_or_none()

    if project is None:
        raise ProjectNotFoundError()

    return project


def update_project(
    db: Session,
    project_id: int,
    project_data: ProjectUpdate,
    current_user: User,
) -> Project:
    project = get_project_by_id(
        db=db,
        project_id=project_id,
        current_user=current_user,
    )

    update_data = project_data.model_dump(exclude_unset=True)

    for field, value in update_data.items():
        setattr(project, field, value)

    db.commit()
    db.refresh(project)

    return project


def delete_project(
    db: Session,
    project_id: int,
    current_user: User,
) -> None:
    project = get_project_by_id(
        db=db,
        project_id=project_id,
        current_user=current_user,
    )

    db.delete(project)
    db.commit()