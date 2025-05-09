// Import the Firebase SDK
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDx6OAbJILHmsm9yTWLojFyBf4fRSuSCVE",
    authDomain: "student-dashboard-1.firebaseapp.com",
    projectId: "student-dashboard-1",
    storageBucket: "student-dashboard-1.firebasestorage.app",
    messagingSenderId: "545325488200",
    appId: "1:545325488200:web:5ef1138e02b7719e84607d",
    measurementId: "G-GFQ2J27HTJ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Export the Firebase Authentication instance
export const auth = getAuth(app);

export default app;