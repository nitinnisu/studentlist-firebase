import React from 'react';

function Filter({ courses, onFilterChange }) {
  return (
    <div>
      <label htmlFor="courseFilter">Filter by Course:</label>
      <select id="courseFilter" onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All Courses</option>
        {courses.map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;