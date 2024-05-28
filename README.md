# CampusTut

CampusTut is a web application designed to connect learners with tutors for academic assistance.

## Features

- **User Management**: Register as a learner or tutor, login securely, update profile, and delete account.
- **Tutor Management**: View all tutors, view tutor details, update tutor availability, and delete tutor account.
- **Course Management**: Create new courses, view all courses, view course details, update course details, and delete courses.
- **Booking Management**: Create new bookings, view all bookings, view booking details, update booking status, and delete bookings.
- **Review Management**: Leave reviews for tutors, view all reviews, and view review details.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user, tutor, course, review, and booking data.
- **Redis**: In-memory data structure store for caching.
- **JWT (JSON Web Tokens)**: Secure authentication and authorization mechanism.
- **Swagger UI**: API documentation tool for visualizing and interacting with the API endpoints.
- **bcrypt.js**: Library for hashing passwords.
- **Validator**: Library for validating and sanitizing user input data.
- **dotenv**: Library for loading environment variables from a .env file.
- **Nodemon**: Development tool for automatically restarting the server during development.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/GideonBature/CampusTut.git
    ```

2. Navigate to the project directory:

    ```bash
    cd CampusTut
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file and set the following environment variables:

    ```plaintext
    PORT=8080
    MONGODB_LOCAL_URI="mongodb://localhost:27017/campustut"
    JWT_SECRET="your_jwt_secret"
    REDIS_URI="redis://localhost:6379"
    ```

5. Start the server:

    ```bash
    npm start
    ```

6. For Development:

    ```bash
    npm run dev
    ```

## Usage

- Access the API documentation at http://localhost:8080/api-docs to interact with the API endpoints using Swagger UI.
- Use tools like Postman or cURL to make requests to the API endpoints.

### Example API Requests

#### Register a new user

```bash
curl -X POST http://localhost:8080/api/register \
  -H "Content-Type: application/json" \
  -d '{
        "name": "Gideon Bature",
        "email": "gideon.bature@example.com",
        "password": "password",
        "role": "learner"
      }'
```

#### Login

```bash
curl -X POST http://localhost:8080/api/login \
  -H "Content-Type: application/json" \
  -d '{
        "email": "gideon.bature@example.com",
        "password": "password"
      }'
```

#### Get all users
```bash
curl -X GET http://localhost:8080/api/users
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [ISC License](LICENSE).
