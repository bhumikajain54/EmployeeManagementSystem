# Employee Management System - Backend

This is the Spring Boot backend for the Employee Management System.

## Features
- **Employee Management**: CRUD operations for employee records.
- **Security**: JWT-based authentication and authorization.
- **Email Service**: Automated email notifications for new employee registrations.
- **CORS Support**: Configured for seamless frontend integration.

## Tech Stack
- **Framework**: Spring Boot 3.x
- **Language**: Java 17
- **Database**: MySQL (Hosted on Railway)
- **Security**: Spring Security + JWT
- **Build Tool**: Maven

## Getting Started

### Prerequisites
- JDK 17 or higher
- Maven 3.x

### Configuration
Update the `src/main/resources/application.properties` file with your database and mail server credentials.

### Running the Application
```bash
./mvnw spring-boot:run
```

## API Documentation
The API follows RESTful principles. Key endpoints include:
- `POST /api/v1/auth/**`: Authentication endpoints (Register/Login).
- `GET /api/v1/employees`: Retrieve all employees (Requires Authentication).
- `POST /api/v1/employees`: Add a new employee.

## License
This project is licensed under the MIT License.
