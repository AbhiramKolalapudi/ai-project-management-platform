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

```
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

```
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

```
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


## Learning Journal — Day 5

**Date:** 31 July 2026


## 🎯 Goal

Build the complete Projects API using a production-style backend architecture while understanding RESTful API design, service layers, validation, and CRUD operations with FastAPI and SQLAlchemy.


## ✅ Completed

* Created the complete `Project` CRUD service layer.
* Implemented project creation.
* Implemented retrieving all projects for the authenticated user.
* Implemented retrieving a single project by ID.
* Implemented project updates using partial updates (`PATCH`).
* Implemented project deletion.
* Created the complete Projects API router.
* Connected API routes to the service layer.
* Protected every Project endpoint using JWT authentication.
* Restricted project access to the authenticated owner.
* Implemented request validation using Pydantic schemas.
* Implemented response serialization using `response_model`.
* Added appropriate HTTP status codes for CRUD operations.
* Created the `ProjectNotFoundError` custom exception.
* Successfully completed the first full CRUD resource in the application.


## 📚 Concepts Learned

* REST API Design
* CRUD Architecture
* Resource-Based Routing
* Path Parameters
* Service Layer Architecture
* Reusing Business Logic (DRY Principle)
* Ownership-Based Authorization
* SQLAlchemy Query Filtering
* `select()`
* `where()`
* `scalar_one_or_none()`
* `scalars().all()`
* SQLAlchemy `delete()`
* Partial Updates (`PATCH`)
* `PUT` vs `PATCH`
* Pydantic `model_dump()`
* `exclude_unset=True`
* Python `setattr()`
* FastAPI `response_model`
* FastAPI Response Serialization
* HTTP Status Codes (`200`, `201`, `204`)
* Custom Exceptions
* Security Through Query Filtering


## 💡 Key Takeaways

* The service layer should contain business logic, while API routes should remain thin and simply coordinate requests and responses.
* Reusing helper functions such as `get_project_by_id()` reduces duplicated code and keeps authorization logic consistent.
* `PATCH` is designed for partial updates, allowing clients to update only the fields they provide.
* `model_dump(exclude_unset=True)` prevents existing data from being unintentionally overwritten during partial updates.
* `response_model` ensures that only intended fields are returned to clients while automatically converting SQLAlchemy models into API responses.
* Filtering queries using both `project_id` and `owner_id` prevents users from accessing resources that belong to other users.
* Separating Models, Schemas, Services, API Routes, Dependencies, and Exceptions creates a scalable backend architecture that can easily support additional resources.


## 📂 Current Project Structure

```text
backend/
├── alembic/
├── app/
│   ├── api/
│   │   ├── auth.py
│   │   └── project.py
│   ├── core/
│   │   ├── config.py
│   │   └── security.py
│   ├── exceptions/
│   │   ├── auth.py
│   │   ├── project.py
│   │   ├── user.py
│   │   └── __init__.py
│   ├── models/
│   │   ├── project.py
│   │   └── user.py
│   ├── schemas/
│   │   ├── project.py
│   │   └── user.py
│   ├── services/
│   │   ├── project_service.py
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
implement complete project CRUD API and service architecture
```


## ➡️ Next Session

* Build the complete Task API
* Create Task schemas
* Create the Task service layer
* Implement Task CRUD operations
* Link Tasks to Projects
* Nested resource ownership and authorization
* Query filtering by project
* Pagination fundamentals
* Test complete Project → Task workflow


# AI Project Management Platform

## Learning Journal — Day 6

**Date:** 1 August 2026

---

## 🎯 Goal

Build the complete Task Management API while understanding nested resources, one-to-many relationships, SQL JOINs, and pagination in a production-style backend architecture.

## ✅ Completed

* Created the complete `Task` CRUD service layer.
* Implemented task creation within projects.
* Implemented retrieving all tasks belonging to a project.
* Implemented retrieving a single task by ID.
* Implemented task updates using partial updates (`PATCH`).
* Implemented task deletion.
* Created the complete Tasks API router.
* Connected API routes to the Task service layer.
* Linked tasks to their parent projects using foreign keys.
* Reused Project service logic for nested resource authorization.
* Implemented ownership verification for nested resources.
* Implemented SQL JOINs for secure task retrieval.
* Added pagination using `skip` and `limit`.
* Added query parameter validation using `Query()`.
* Successfully completed the Project → Task backend workflow.

## 📚 Concepts Learned

* Parent vs Child Resources
* Nested Resources
* One-to-Many Relationships
* Nested Resource Routing
* Service Layer Reuse
* Cross-Service Dependencies
* SQL JOINs
* INNER JOIN
* Foreign Key Navigation
* Authorization Through JOINs
* Collection Endpoints
* Resource Endpoints
* Pagination Fundamentals
* SQL `LIMIT`
* SQL `OFFSET`
* SQLAlchemy `.join()`
* SQLAlchemy `.offset()`
* SQLAlchemy `.limit()`
* FastAPI Query Parameters
* `Query()`
* Query Parameter Validation
* `ge` / `le` Validation
* Thin Router Architecture
* Business Logic Reuse
* Progressive API Design

## 💡 Key Takeaways

* Tasks are child resources that should always belong to a project rather than existing independently.
* Nested resources often require authorization through their parent resource rather than storing ownership directly.
* SQL JOINs allow related tables to be queried efficiently in a single database operation.
* Reusing helper functions such as `get_project_by_id()` and `get_task_by_id()` centralizes authorization logic and prevents code duplication.
* Pagination prevents APIs from returning unnecessarily large datasets and is essential for scalable backend applications.
* FastAPI automatically resolves path, query, body, and dependency parameters based on function signatures.
* Query parameter validation using `Query()` provides automatic validation and API documentation while keeping business logic independent of the web framework.
* A thin API layer combined with a reusable service layer results in cleaner, more maintainable backend architecture.

## 📂 Current Project Structure

```text
backend/
├── alembic/
├── app/
│   ├── api/
│   │   ├── auth.py
│   │   ├── project.py
│   │   └── task.py
│   ├── core/
│   │   ├── config.py
│   │   └── security.py
│   ├── exceptions/
│   │   ├── auth.py
│   │   ├── project.py
│   │   ├── task.py
│   │   ├── user.py
│   │   └── __init__.py
│   ├── models/
│   │   ├── project.py
│   │   ├── task.py
│   │   └── user.py
│   ├── schemas/
│   │   ├── project.py
│   │   ├── task.py
│   │   └── user.py
│   ├── services/
│   │   ├── project_service.py
│   │   ├── task_service.py
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
implement complete task CRUD API with nested resources and pagination
```

## ➡️ Next Session

* Exception Handlers
* Centralized Error Handling
* Project Dashboard Endpoints
* Task Statistics
* Project Progress Calculation
* Dashboard Aggregation Queries
* Advanced SQLAlchemy Queries
* API Response Optimization


## Learning Journal — Day 7

**Date:** 2 August 2026

---

## 🎯 Goal

Build the first AI-powered backend features by integrating a Large Language Model (Google Gemini) into the existing backend architecture while understanding prompt engineering, structured AI outputs, and production-style AI service design.

## ✅ Completed

* Integrated the Google Gemini API into the backend.
* Configured AI credentials using environment variables.
* Added AI-specific configuration to the application settings.
* Created a dedicated `ai_service.py` to isolate all AI-related logic.
* Implemented the first AI connection test endpoint.
* Created AI-specific Pydantic schemas for validating model output.
* Designed structured prompts for software task generation.
* Generated implementation tasks from project descriptions using Gemini.
* Parsed AI responses into Python objects using `json.loads()`.
* Validated AI-generated data using Pydantic models.
* Converted validated AI output into existing `TaskCreate` schemas.
* Reused the existing Task Service to persist AI-generated tasks.
* Implemented an AI-powered endpoint to automatically populate projects with tasks.
* Added an AI-specific custom exception for future centralized error handling.
* Successfully completed the first end-to-end AI workflow:
  Project → Gemini → Validation → Database.

## 📚 Concepts Learned

* Large Language Models (LLMs)
* LLM APIs
* Request–Response AI Architecture
* AI Service Layer
* Separation of Concerns
* Prompt Engineering
* Structured Prompt Design
* Structured JSON Output
* Google Gemini API
* Google GenAI SDK
* API Keys
* Environment Variables for AI Credentials
* AI Response Parsing
* JSON Parsing
* Pydantic Validation
* AI Schema Design
* AI Output Validation
* Service Orchestration
* Business Logic vs AI Logic
* External Service Integration
* Defensive Prompt Engineering
* Defensive Programming
* Circular Imports
* Lazy Imports
* AI Exception Architecture

## 💡 Key Takeaways

* AI should be isolated inside its own service layer, just like database access or authentication logic.
* The backend should orchestrate AI workflows rather than allowing API routes to communicate directly with external AI services.
* Prompt engineering is a form of software engineering—well-structured prompts produce more predictable and reliable outputs.
* AI-generated responses should never be trusted directly and must always be validated before entering the application.
* Pydantic acts as a safety layer by ensuring AI responses match the expected structure before business logic executes.
* Business rules belong inside the application, while AI should only generate information the application cannot determine itself.
* Circular imports occur because Python executes modules from top to bottom during import, and lazy imports provide a practical way to resolve dependency cycles when appropriate.
* Reusing the existing Task Service ensured that AI-generated tasks followed exactly the same validation and persistence pipeline as manually created tasks.
* Integrating an external AI model is not just about calling an API—it requires careful architecture, validation, and error handling to build reliable software.

## 📂 Current Project Structure

```text
backend/
├── alembic/
├── app/
│   ├── api/
│   │   ├── auth.py
│   │   ├── project.py
│   │   ├── task.py
│   │   └── ai.py
│   ├── core/
│   │   ├── config.py
│   │   └── security.py
│   ├── exceptions/
│   │   ├── auth.py
│   │   ├── project.py
│   │   ├── task.py
│   │   ├── user.py
│   │   ├── ai.py
│   │   └── __init__.py
│   ├── models/
│   │   ├── project.py
│   │   ├── task.py
│   │   └── user.py
│   ├── schemas/
│   │   ├── ai.py
│   │   ├── project.py
│   │   ├── task.py
│   │   └── user.py
│   ├── services/
│   │   ├── ai_service.py
│   │   ├── project_service.py
│   │   ├── task_service.py
│   │   └── user_service.py
│   ├── database.py
│   ├── dependencies.py
│   └── main.py
├── alembic/
├── alembic.ini
├── .env
├── requirements.txt
└── .gitignore
```

## 📝 Git Commit

```text
implement AI backend integration with Gemini task generation
```

## ➡️ Next Session

* React Project Setup
* Frontend Architecture
* Component-Based Design
* React Router
* API Integration with FastAPI
* Authentication Flow in React
* Login & Registration Pages
* Protected Routes
* Project Dashboard UI
* Connect Frontend to the AI Backend