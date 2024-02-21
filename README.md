# React & Nest.js Home Assignment

This project comprises a React frontend and a Nest.js backend. The frontend is developed using React.js, and the backend is developed using Nest.js. The project utilizes a MongoDB server to store user data. The frontend includes two tabs: one for a user registration form and another to display the saved user data fetched from the backend.

## Frontend Setup

### Prerequisites
- Node.js (version 21.6.2)
- npm or yarn

### Steps to Run
1. Clone the repository.
2. Navigate to the `frontend` directory.
3. Create a `.env` file in the `frontend` directory.
4. Add the following environment variable to the `.env` file:
   
REACT_APP_SERVER_URL=http://localhost:3001

5. Install dependencies using `npm install` or `yarn install`.
6. Start the development server using `npm start` or `yarn start`.
7. Access the application at `http://localhost:3000`.

## Backend Setup

### Prerequisites
- Node.js (version 21.6.2)
- npm or yarn
- MongoDB server (installed and running on port 27017)

### Steps to Run
1. Clone the repository.
2. Navigate to the `backend` directory.
3. Create a `.env` file in the `backend` directory.
4. Add the following environment variables to the `.env` file:

JWT_TOKEN=server_jwt_token
MONGO_URI=mongodb://localhost:27017/nestapp1

5. Install dependencies using `npm install` or `yarn install`.
6. Start the MongoDB server. Ensure it's running on port 27017.
7. Start the Nest.js server using `npm run start` or `yarn start`.
8. The backend server will start running at `http://localhost:3001`.

### Endpoints
- `POST /user`: Creates a new user.
- `POST /user/login`: Authenticates a user.
- `GET /user`: Retrieves the currently logged-in user.

## Additional Notes
- Ensure your MongoDB server is installed, configured correctly, and accessible by the backend server.
- You can customize the frontend and backend configurations according to your requirements.
- For production deployment, follow the respective deployment guidelines for React and Nest.js applications.

Feel free to reach out if you encounter any issues or need further assistance. Happy coding!
