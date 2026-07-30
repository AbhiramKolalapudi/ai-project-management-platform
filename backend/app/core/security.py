from pwdlib import PasswordHash
from datetime import datetime, timedelta, timezone

import jwt

from app.core.config import settings
from fastapi.security import OAuth2PasswordBearer

from jwt import ExpiredSignatureError, InvalidTokenError as PyJWTInvalidTokenError

from app.exceptions import InvalidTokenError

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/auth/login"
)

password_hash = PasswordHash.recommended()


def hash_password(password: str) -> str:
    return password_hash.hash(password)


def verify_password(
    plain_password: str,
    hashed_password: str,
) -> bool:
    return password_hash.verify(
        plain_password,
        hashed_password,
    )


def create_access_token(data: dict) -> str:
    to_encode = data.copy()

    expire = datetime.now(timezone.utc) + timedelta(
        minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES
    )

    to_encode["exp"] = expire

    encoded_jwt = jwt.encode(
        to_encode,
        settings.SECRET_KEY,
        algorithm=settings.ALGORITHM,
    )

    return encoded_jwt


def verify_access_token(token: str) -> str:
    try:
        payload = jwt.decode(
            token,
            settings.SECRET_KEY,
            algorithms=[settings.ALGORITHM],
        )

        email = payload.get("sub")

        if email is None:
            raise InvalidTokenError("Token does not contain a subject.")

        return email

    except ExpiredSignatureError:
        raise InvalidTokenError("Token has expired.")

    except PyJWTInvalidTokenError:
        raise InvalidTokenError("Invalid token.")