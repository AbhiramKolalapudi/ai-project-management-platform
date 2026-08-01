from fastapi import APIRouter, Depends, status, Query
from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_user
from app.models.user import User
from app.schemas.task import (
    TaskCreate,
    TaskResponse,
    TaskUpdate,
)
from app.services.task_service import (
    create_task,
    get_task_by_id,
    get_tasks_by_project,
    update_task,
    delete_task,
)

router = APIRouter(
    tags=["Tasks"],
)


@router.post(
    "/projects/{project_id}/tasks",
    response_model=TaskResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_task_endpoint(
    project_id: int,
    task_data: TaskCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return create_task(
        db=db,
        project_id=project_id,
        task_data=task_data,
        current_user=current_user,
    )


@router.get(
    "/projects/{project_id}/tasks",
    response_model=list[TaskResponse],
)
def get_tasks_by_project_endpoint(
    project_id: int,
    skip: int = Query(default=0, ge=0),
    limit: int = Query(default=100, ge=1, le=100),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return get_tasks_by_project(
        db=db,
        project_id=project_id,
        current_user=current_user,
        skip=skip,
        limit=limit,
    )


@router.get(
    "/tasks/{task_id}",
    response_model=TaskResponse,
)
def get_task(
    task_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return get_task_by_id(
        db=db,
        task_id=task_id,
        current_user=current_user,
    )


@router.patch(
    "/tasks/{task_id}",
    response_model=TaskResponse,
)
def update_task_endpoint(
    task_id: int,
    task_data: TaskUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return update_task(
        db=db,
        task_id=task_id,
        task_data=task_data,
        current_user=current_user,
    )


@router.delete(
    "/tasks/{task_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_task_endpoint(
    task_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    delete_task(
        db=db,
        task_id=task_id,
        current_user=current_user,
    )