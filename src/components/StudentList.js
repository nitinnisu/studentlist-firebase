import React from 'react';
import './StudentList.css'; // Import CSS for styling the table

function StudentList({ students }) {
  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            {/* You can add more headers here if you have more student details */}
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              {/* You can add more data cells here */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;