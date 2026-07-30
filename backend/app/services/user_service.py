from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.security import hash_password, verify_password
from app.exceptions import UserAlreadyExistsError, InvalidCredentialsError
from app.models.user import User
from app.schemas.user import UserCreate


def get_user_by_email(
    db: Session,
    email: str,
) -> User | None:
    statement = select(User).where(
        User.email == email
    )

    result = db.execute(statement)

    return result.scalar_one_or_none()


def create_user(
    db: Session,
    user_data: UserCreate,
) -> User:
    existing_user = get_user_by_email(
        db,
        user_data.email,
    )

    if existing_user:
        raise UserAlreadyExistsError(
            f"User with email '{user_data.email}' already exists."
        )

    hashed_password = hash_password(
        user_data.password
    )

    user = User(
        name=user_data.name,
        email=user_data.email,
        hashed_password=hashed_password,
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user


def authenticate_user(
    db: Session,
    email: str,
    password: str,
) -> User:
    user = get_user_by_email(db, email)

    if not user:
        raise InvalidCredentialsError("Invalid email or password.")

    if not verify_password(password, user.hashed_password):
        raise InvalidCredentialsError("Invalid email or password.")

    return user

    
