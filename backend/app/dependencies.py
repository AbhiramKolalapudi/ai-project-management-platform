from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.security import (
    oauth2_scheme,
    verify_access_token,
)
from app.database import get_db
from app.exceptions import InvalidTokenError
from app.models.user import User
from app.services.user_service import get_user_by_email

def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db),
) -> User:
    try:
        email = verify_access_token(token)

        user = get_user_by_email(db, email)

        if user is None:
            raise InvalidTokenError("User not found.")

        return user

    except InvalidTokenError as exc:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=str(exc),
        )