# Employee Management System

A comprehensive Full-Stack Employee Management System built with **Angular** for the frontend and **Spring Boot** for the backend. The application features secure authentication, employee record management, and email notifications.

## 🚀 Features

- **Authentication & Authorization**: Secure login and registration using JWT (JSON Web Tokens).
- **Employee Management**: Full CRUD operations (Create, Read, Update, Delete) for employee records.
- **Email Integration**: Automated email services for notifications.
- **Responsive UI**: A modern, user-friendly interface built with Angular and custom CSS.
- **Secure Backend**: Role-based access control and secure API endpoints.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: Angular 16+
- **Styling**: CSS3, HTML5
- **Logic**: TypeScript
- **Tools**: Angular CLI

### Backend
- **Framework**: Spring Boot 3.2.1
- **Language**: Java 17
- **Database**: MySQL (hosted on Railway)
- **Security**: Spring Security, JWT
- **ORM**: Spring Data JPA / Hibernate
- **Build Tool**: Maven

---

## 📁 Project Structure

```text
EmployeeManagementSystem/
├── emp_backend/                # Spring Boot Backend Project
│   ├── src/                    # Source code
│   ├── pom.xml                 # Maven dependencies
│   └── mvnw                    # Maven wrapper
├── employee frontend final/    # Angular Frontend Project
│   ├── src/                    # Angular source files
│   ├── package.json            # NPM dependencies
│   └── angular.json            # Angular configuration
└── ScreenShots/                # Project visual documentation
```

---

## ⚙️ Setup & Installation

### 1. Backend Setup (`emp_backend`)
- Ensure you have **Java 17** and **Maven** installed.
- Configure your MySQL database in `src/main/resources/application.properties`.
- Run the application:
  ```bash
  cd emp_backend
  ./mvnw spring-boot:run
  ```

### 2. Frontend Setup (`employee frontend final`)
- Ensure you have **Node.js** and **NPM** installed.
- Install dependencies:
  ```bash
  cd "employee frontend final"
  npm install
  ```
- Run the development server:
  ```bash
  ng serve
  ```
- Access the app at `http://localhost:4200`.

---

## 📸 Screenshots
Visual documentation of the system can be found in the `ScreenShots/` directory.

---

## 📄 License
This project is for demonstration purposes.