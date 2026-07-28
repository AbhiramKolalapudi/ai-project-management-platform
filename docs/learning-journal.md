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