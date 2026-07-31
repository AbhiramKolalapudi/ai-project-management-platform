from fastapi import APIRouter, Depends, Response, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_user
from app.models.user import User
from app.schemas.project import (
    ProjectCreate,
    ProjectResponse,
    ProjectUpdate,
)
from app.services import project_service

router = APIRouter(
    prefix="/projects",
    tags=["Projects"],
)


@router.post(
    "",
    response_model=ProjectResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_project_route(
    project_data: ProjectCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return project_service.create_project(
        db=db,
        project_data=project_data,
        current_user=current_user,
    )


@router.get(
    "",
    response_model=list[ProjectResponse],
)
def get_projects_route(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return project_service.get_projects(
        db=db,
        current_user=current_user,
    )


@router.get(
    "/{project_id}",
    response_model=ProjectResponse,
)
def get_project_route(
    project_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return project_service.get_project_by_id(
        db=db,
        project_id=project_id,
        current_user=current_user,
    )


@router.patch(
    "/{project_id}",
    response_model=ProjectResponse,
)
def update_project_route(
    project_id: int,
    project_data: ProjectUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return project_service.update_project(
        db=db,
        project_id=project_id,
        project_data=project_data,
        current_user=current_user,
    )


@router.delete(
    "/{project_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_project_route(
    project_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    project_service.delete_project(
        db=db,
        project_id=project_id,
        current_user=current_user,
    )

    return Response(status_code=status.HTTP_204_NO_CONTENT)