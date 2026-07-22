```markdown
# Project Context

This document provides an overview of the `Demo_2` project based on the currently available file tree and content.

## What this project does
This project is a basic Python application, initialized with `poetry`. Its primary function currently involves a simple "Hello, World!" program. The `README.md` provides further details on its specific purpose and instructions for setup and usage.

## Tech Stack and Architecture
The core technologies and architectural components of this project include:
*   **Language & Package Management**: Python 3.x, managed with `poetry`.
*   **Containerization**: Docker, used for packaging and deployment.
*   **Testing Framework**: `pytest` for writing and running unit tests.
*   **Code Quality**: `pre-commit` hooks enforce standards, utilizing tools like Black for code formatting and Flake8 for linting.
*   **CI/CD**: GitHub Actions automate testing, linting, and Docker image builds.
*   **Configuration**: `.editorconfig` for maintaining consistent coding styles across the project.

## Key Directories and Their Purpose
The project follows a standard structure with dedicated directories:
*   `src/`: Contains the main application source code (e.g., `main.py`).
*   `tests/`: Houses unit and integration tests (e.g., `test_main.py`).
*   `docs/`: Stores project documentation, such as local setup guides (`local_run.md`).
*   `.github/workflows/`: Defines GitHub Actions CI/CD workflows.
Root-level files like `pyproject.toml`, `poetry.lock`, `Dockerfile`, `.pre-commit-config.yaml`, and `.editorconfig` configure the project, dependencies, and development environment.

## Important Conventions or Patterns
Several conventions and patterns guide development in this project:
*   **Code Quality**: Code is automatically formatted with Black and linted with Flake8 via `pre-commit` hooks before commits, complemented by `.editorconfig` for style consistency.
*   **Testing**: Unit tests are mandatory and written using `pytest` in the `tests/` directory.
*   **CI/CD**: Automated workflows via GitHub Actions ensure code quality, test execution, and Docker image builds on every push and pull request.
*   **Documentation**: Essential operational documentation, including local run instructions, is maintained within the `docs/` directory.
*   **Containerization**: The application is designed for containerized deployment using Docker.
```