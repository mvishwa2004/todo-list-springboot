# Simple Todo List - Java + MySQL + HTML/CSS/JavaScript

## Technologies
- Java 21
- Spring Boot
- Spring Data JPA
- MySQL
- HTML
- CSS
- JavaScript
- Maven

## Database
Create the database:

CREATE DATABASE todo_db;

Then open:
src/main/resources/application.properties

Change:
spring.datasource.password=YOUR_MYSQL_PASSWORD

to your actual MySQL password.

## Run
Open the project in IntelliJ IDEA.

Run:
TodoListApplication.java

Then open:
http://localhost:8080

## API
GET    /api/todos
POST   /api/todos
PUT    /api/todos/{id}
DELETE /api/todos/{id}
