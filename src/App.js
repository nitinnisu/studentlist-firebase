import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentList from './components/StudentList';
import Login from './components/Login';
import AddStudentForm from './components/AddStudentForm';
import Filter from './components/Filter';
import './App.css';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const LOCAL_STORAGE_KEY = 'studentDashboard.students';

function App() {
  const [user, setUser] = useState(null);
  const [students, setStudents] = useState(() => {
    const storedStudents = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedStudents ? JSON.parse(storedStudents) : [];
  });
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [initialLoad, setInitialLoad] = useState(true); // To prevent fetching after local storage load

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      console.log(authUser ? 'User logged in:' : 'User logged out', authUser);
    });

    if (initialLoad) {
      axios.get('/api/students')
        .then(response => {
          const initialData = response.data;
          setStudents(prevStudents => {
            const storedStudents = localStorage.getItem(LOCAL_STORAGE_KEY);
            return storedStudents ? JSON.parse(storedStudents) : initialData;
          });
          setLoading(false);
          setInitialLoad(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
          setInitialLoad(false);
          console.error("Error fetching students:", error);
        });
    }

    return () => unsubscribeAuth();
  }, [initialLoad]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(students));
    const uniqueCourses = [...new Set(students.map(student => student.course))];
    setCourses(uniqueCourses);
    handleFilterChange(selectedCourse); // Re-apply the filter when students update
  }, [students, selectedCourse]);

  const handleFilterChange = (course) => {
    setSelectedCourse(course);
    if (course === '') {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter(student => student.course === course);
      setFilteredStudents(filtered);
    }
  };

  const handleLoginSuccess = () => {
    console.log('Login successful in App component');
  };

  const addStudent = (newStudent) => {
    console.log('Adding new student:', newStudent);
    setStudents(prevStudents => [...prevStudents, { ...newStudent, id: Date.now() }]);
  };

  if (loading && initialLoad) {
    return <p>Loading students...</p>;
  }

  if (error) {
    return <p>Error loading students: {error.message}</p>;
  }

  return (
    <div className="App">
      <h1>Student Dashboard</h1>
      {user ? (
        <div>
          <Filter courses={courses} onFilterChange={handleFilterChange} />
          <StudentList students={filteredStudents} />
          <AddStudentForm onAddStudent={addStudent} />
        </div>
      ) : (
        <Login onLogin={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;