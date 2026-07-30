from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm

from app.database import get_db
from app.models.user import User
from app.core.security import create_access_token
from app.exceptions import (
    InvalidCredentialsError,
    UserAlreadyExistsError,
)
from app.schemas.user import (
    Token,
    UserCreate,
    UserResponse,
)
from app.services.user_service import (
    authenticate_user,
    create_user,
)

from app.dependencies import get_current_user

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
)

def register(
    user_data: UserCreate,
    db: Session = Depends(get_db),
) -> UserResponse:
    try:
        user = create_user(
            db,
            user_data,
        )

        return user

    except UserAlreadyExistsError as exc:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=str(exc),
        )

@router.post(
    "/login",
    response_model=Token,
)
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
) -> Token:
    try:
        user = authenticate_user(
            db,
            form_data.username,
            form_data.password,
        )

        access_token = create_access_token(
            {"sub": user.email}
        )

        return Token(
            access_token=access_token,
            token_type="bearer",
        )

    except InvalidCredentialsError as exc:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=str(exc),
        )

@router.get("/me", response_model=UserResponse)
def get_me(
    current_user: User = Depends(get_current_user),
):
    return current_user