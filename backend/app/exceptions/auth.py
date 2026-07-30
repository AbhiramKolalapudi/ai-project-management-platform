class InvalidCredentialsError(Exception):
    """Raised when email or password is incorrect."""
    pass


class InvalidTokenError(Exception):
    """Raised when a JWT is invalid or expired."""
    pass