# Student Dashboard Application

This project is a React-based dashboard application for managing a list of students. It fulfills the requirements outlined in the internship assignment, including listing and filtering students, adding new students (protected by Firebase login), and simulating data fetching from a mock API.

## Features

- **View Student List:** Displays a list of students fetched from a mock API. The list is presented in an organized table format.
- **Add New Student:** Allows logged-in users to add new students via a form with basic validation (required fields, valid email). This functionality is protected by Firebase authentication.
- **Filter by Course:** Enables users to filter the student list by selecting a course from a dropdown menu.
- **Mock API Simulation:** Uses `axios-mock-adapter` to simulate API calls for fetching initial student data.
- **Firebase Authentication:** Integrates Firebase for user login, securing the "add new student" functionality.
- **Basic Data Persistence:** Utilizes `localStorage` to persist the added student data across page reloads (client-side simulation).
- **Responsive UI:** The user interface is designed to be responsive and adapt to different screen sizes (desktop and mobile).

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **axios:** A promise-based HTTP client for making API requests.
- **axios-mock-adapter:** A library to mock `axios` requests for simulating a backend API.
- **Firebase:** A platform for building web and mobile applications, used here for authentication.
- **CSS:** For styling the application.

## Installation

1.  **Clone the repository** (if you have one, otherwise, this step is not applicable).
    ```bash
    git clone <repository_url>
    cd student-dashboard
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn add
    ```

3.  **Set up Firebase:**
    - Create a new project in the [Firebase Console](https://console.firebase.google.com/).
    - Enable the "Email/password" sign-in method in the Authentication section.
    - Obtain your Firebase project configuration (API key, auth domain, etc.) from the Project settings.
    - Replace the placeholder values in `src/firebase.js` with your actual Firebase credentials.

4.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```

    This will run the application in your browser, usually at `http://localhost:3000`.

## Mock API

The application uses `axios-mock-adapter` to simulate API calls. The mock API endpoint `/api/students` (for fetching initial data) is defined in `src/api/mockStudents.js`.

## Firebase Authentication

User authentication is handled using Firebase. The `Login` component allows users to sign in with email and password. The "Add New Student" functionality is only accessible to logged-in users.

## Running the Application

After following the installation steps, you can run the application using the `npm start` or `yarn start` command.

## Video Demonstration

As part of the assignment, a recorded video demonstrates the following:

- Interaction with the user interface.
- Opening the browser's Inspect tab (developer tools).
- Displaying the Network calls made to Firebase during the login process.

## Contact

Nitin Choudhary 
nitin499533@gmail.com 
