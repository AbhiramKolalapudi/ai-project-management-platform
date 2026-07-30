# AI Project Management Platform
## Learning Journal — Day 1
**Date:** 27 July 2026

---

## 🎯 Goal
Set up the backend project and understand the fundamentals of modern backend development.

## ✅ Completed
- Created GitHub repository and connected the local project.
- Set up the Python virtual environment.
- Installed FastAPI and Uvicorn.
- Created the initial backend structure.
- Moved `main.py` into the `app` package.
- Verified the API and Swagger documentation.

## 📚 Concepts Learned
- Web Framework vs Web Server
- FastAPI
- Uvicorn
- APIs and HTTP Request Flow
- HTTP Methods (GET, POST, PUT, PATCH, DELETE)
- JSON Responses
- Modules vs Packages
- Layered Architecture
- Separation of Concerns
- Business Logic
- Environment Variables and `.env`
- Configuration vs Constants

## 💡 Key Takeaways
- FastAPI handles API logic, while Uvicorn serves the application.
- Business logic should remain separate from API routes and the database layer.
- Sensitive configuration should never be hardcoded.
- Good software architecture makes applications easier to maintain and scale.

## 📂 Current Project Structure

```text
backend/
├── app/
│   ├── __init__.py
│   └── main.py
├── requirements.txt
└── .gitignore
```

## 📝 Git Commit

```bash
setup backend foundation with FastAPI
```

## ➡️ Next Session
- Introduction to Databases
- SQL vs NoSQL
- PostgreSQL
- Tables, Rows, and Columns
- Primary & Foreign Keys
- SQLAlchemy ORM
- Connect FastAPI to PostgreSQL


## Learning Journal — Day 2
**Date:** 28 July 2026

---

## 🎯 Goal
Understand relational databases, SQL fundamentals, PostgreSQL, and how SQLAlchemy bridges Python and databases.

## ✅ Completed
- Installed PostgreSQL and pgAdmin.
- Created the `project_management` database.
- Learned the hierarchy of PostgreSQL Server → Database → Tables → Rows.
- Created the first `users` table manually using SQL.
- Inserted records into the database.
- Queried data using SQL.
- Learned how to update and delete records.
- Understood how SQLAlchemy translates Python objects into SQL queries.

## 📚 Concepts Learned
- Why Databases Exist
- RAM vs Persistent Storage
- Database Indexes
- Concurrency
- SQL vs NoSQL
- Relational Databases
- PostgreSQL
- DBMS (Database Management System)
- Database Hierarchy
- Tables, Rows, and Columns
- Data Types (`INTEGER`, `TEXT`, `BOOLEAN`, `DATE`)
- Constraints (`PRIMARY KEY`, `NOT NULL`)
- Auto-Incrementing IDs (`IDENTITY`)
- SQL Fundamentals
  - `CREATE TABLE`
  - `INSERT`
  - `SELECT`
  - `WHERE`
  - `UPDATE`
  - `DELETE`
- CRUD Operations
- ORM (Object Relational Mapper)
- SQLAlchemy Fundamentals
- Python Objects ↔ SQL ↔ PostgreSQL Mapping

## 💡 Key Takeaways
- Databases provide persistence, efficient querying, and safe concurrent access.
- PostgreSQL is a DBMS that manages databases and executes SQL.
- Tables define structure, while rows store actual data.
- Constraints protect data integrity by enforcing rules.
- SQLAlchemy does not replace SQL—it generates SQL from Python objects.
- Understanding SQL first makes SQLAlchemy much easier to learn and debug.

## 📂 Current Project Structure

```text
backend/
├── app/
│   └── main.py
├── requirements.txt
└── .gitignore
```

## 📝 Git Commit

```bash
learn PostgreSQL fundamentals and SQLAlchemy concepts
```

## ➡️ Next Session
- SQLAlchemy Architecture
- Declarative Base
- Database Models
- Create the `User` SQLAlchemy Model
- Connect FastAPI to PostgreSQL
- Create Tables Automatically with SQLAlchemy
- Database Sessions
- Build the First API Endpoint

# AI Project Management Platform

## Learning Journal — Day 3

**Date:** 29 July 2026

---

## 🎯 Goal

Connect the FastAPI application to PostgreSQL using SQLAlchemy and understand how Python models become database tables.

## ✅ Completed

* Installed SQLAlchemy, `psycopg`, and `pydantic-settings`.
* Created the backend configuration system using `.env` and Pydantic Settings.
* Created `config.py` to load environment variables.
* Created `database.py` with a shared SQLAlchemy Engine and Declarative Base.
* Created the first SQLAlchemy `User` model.
* Connected SQLAlchemy to the PostgreSQL database.
* Automatically generated the `users` table using `Base.metadata.create_all(engine)`.
* Verified the generated SQL using `echo=True`.
* Explored why `create_all()` only creates missing tables and does not modify existing ones.

## 📚 Concepts Learned

* SQLAlchemy Architecture
* SQLAlchemy Engine
* Database Drivers (`psycopg`)
* PostgreSQL Connection URLs
* Environment Configuration with `pydantic-settings`
* `BaseSettings`
* `SettingsConfigDict`
* Single Source of Truth
* Declarative Base
* Model Registration
* Metadata
* SQLAlchemy Models
* `Mapped`
* `mapped_column`
* Python Types vs Database Types
* `String`
* `PRIMARY KEY`
* `UNIQUE`
* `NOT NULL`
* Automatic Type Inference
* `Base.metadata`
* `Base.metadata.create_all()`
* Idempotent Operations
* SQL Generation
* Why ORMs Generate SQL Instead of Replacing SQL
* Why Alembic Exists

## 💡 Key Takeaways

* SQLAlchemy acts as the bridge between Python objects and SQL.
* The Engine manages communication with the database but does not immediately open a connection.
* `Base` acts as a shared registry for all database models.
* Models are only blueprints until SQLAlchemy generates SQL from the stored metadata.
* `Mapped` defines the Python type, while `mapped_column()` defines database-specific behaviour.
* `create_all()` safely creates missing tables but intentionally does not modify existing ones.
* Database schema evolution should be handled with migration tools such as Alembic rather than `create_all()`.

## 📂 Current Project Structure

```text
backend/
├── app/
│   ├── core/
│   │   ├── __init__.py
│   │   └── config.py
│   ├── models/
│   │   ├── __init__.py
│   │   └── user.py
│   ├── __init__.py
│   ├── database.py
│   └── main.py
├── .env
├── requirements.txt
└── .gitignore
```

## 📝 Git Commit

```bash
implement SQLAlchemy models and database configuration
```

## ➡️ Next Session

* SQLAlchemy Sessions
* Session Lifecycle
* CRUD Operations with SQLAlchemy
* Dependency Injection with FastAPI
* Alembic
* Database Migrations
* Build the First API Endpoint

# AI Project Management Platform

## Learning Journal — Day 4

**Date:** 30 July 2026

---

## 🎯 Goal

Implement database migrations, build the complete authentication system, and understand how JWT-based authentication secures modern web applications.

## ✅ Completed

- Installed and configured Alembic.
- Initialized the Alembic migration environment.
- Created the first database migration.
- Applied database migrations to PostgreSQL.
- Built the complete User CRUD layer using SQLAlchemy.
- Created the User Service layer.
- Implemented user registration.
- Added password hashing using Passlib and bcrypt.
- Implemented password verification.
- Created reusable authentication utilities.
- Generated JWT access tokens using PyJWT.
- Implemented JWT verification and expiration handling.
- Built custom authentication exceptions.
- Created the `get_current_user()` dependency.
- Protected API endpoints using FastAPI Dependency Injection.
- Implemented the `/auth/me` endpoint.
- Configured OAuth2 Password Flow with Swagger.
- Successfully tested the complete authentication workflow.

## 📚 Concepts Learned

- Alembic
- Database Migrations
- Migration Versioning
- Schema Evolution
- Service Layer
- CRUD Architecture
- Password Hashing
- Bcrypt
- Password Verification
- Authentication vs Authorization
- Stateful vs Stateless Authentication
- JSON Web Tokens (JWT)
- JWT Header
- JWT Payload
- JWT Signature
- JWT Claims (`sub`, `exp`)
- JWT Expiration
- Secret Keys
- Digital Signatures
- OAuth2 Password Flow
- OAuth2PasswordBearer
- OAuth2PasswordRequestForm
- Authorization Headers
- Bearer Tokens
- FastAPI Dependency Injection
- Protected Routes
- Custom Exceptions
- Layered Authentication Architecture

## 💡 Key Takeaways

- Alembic provides safe, version-controlled database schema migrations.
- Passwords should never be stored directly in the database and must always be securely hashed.
- JWT authentication removes the need for server-side sessions by storing user identity inside a signed token.
- JWTs are signed rather than encrypted, so sensitive information should never be stored in the payload.
- FastAPI's Dependency Injection allows authentication logic to be reused across every protected endpoint.
- Separating API routes, services, security utilities, dependencies, and exceptions results in a cleaner and more maintainable backend architecture.

## 📂 Current Project Structure

```text
backend/
├── alembic/
├── app/
│   ├── api/
│   │   └── auth.py
│   ├── core/
│   │   ├── config.py
│   │   └── security.py
│   ├── exceptions/
│   │   ├── auth.py
│   │   ├── user.py
│   │   └── __init__.py
│   ├── models/
│   │   └── user.py
│   ├── schemas/
│   │   └── user.py
│   ├── services/
│   │   └── user_service.py
│   ├── database.py
│   ├── dependencies.py
│   └── main.py
├── alembic.ini
├── .env
├── requirements.txt
└── .gitignore
```

## 📝 Git Commit

```
implement JWT authentication and database migrations
```

## ➡️ Next Session

- Database Relationships
- One-to-Many Relationships
- SQLAlchemy Relationships
- Foreign Keys
- Create the `Project` Model
- Project CRUD Operations
- Nested API Routes
- Project Architecture