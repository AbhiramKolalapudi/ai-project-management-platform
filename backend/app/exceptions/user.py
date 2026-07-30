class UserAlreadyExistsError(Exception):
    """Raised when trying to register with an existing email."""
    pass