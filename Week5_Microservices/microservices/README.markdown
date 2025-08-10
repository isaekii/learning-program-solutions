# Week 5 Microservices: Account and Loan

This repository contains two Spring Boot microservices: **Account** and **Loan**, developed as part of Week 5 hands-on exercises. These microservices are implemented as RESTful web services using Spring Boot 3, with dummy responses and Eureka Discovery Client integration for service discovery.

## Project Structure
- `account/`: Microservice for handling account-related operations.
- `loan/`: Microservice for handling loan-related operations.

## Prerequisites
- Java 17
- Maven 3.8+
- IDE (e.g., IntelliJ, Eclipse) or command-line tools
- Optional: Eureka Discovery Server (running on port 8761) for service registration

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to each microservice folder (`account/` or `loan/`):
   ```bash
   cd account
   mvn clean package
   java -jar target/account-0.0.1-SNAPSHOT.jar
   ```
   ```bash
   cd loan
   mvn clean package
   java -jar target/loan-0.0.1-SNAPSHOT.jar
   ```
3. Test the services:
   - Account: `http://localhost:8080/accounts/123`
   - Loan: `http://localhost:8081/loans/123`

## Endpoints
- **Account Service** (`http://localhost:8080`):
  - `GET /accounts/{number}`: Returns dummy account details.
    ```json
    { "number": "00987987973432", "type": "savings", "balance": 234343 }
    ```
- **Loan Service** (`http://localhost:8081`):
  - `GET /loans/{number}`: Returns dummy loan details.
    ```json
    { "number": "H00987987972342", "type": "car", "loan": 400000, "emi": 3258, "tenure": 18 }
    ```

## Notes
- Both services are configured to register with a Eureka Discovery Server (if available) at `http://localhost:8761/eureka`.
- To run without Eureka, remove the `spring-cloud-starter-netflix-eureka-client` dependency and `@EnableDiscoveryClient` annotation.

## Author
Created as part of Week 5 microservices hands-on exercise.