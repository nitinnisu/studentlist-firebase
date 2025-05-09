import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default axios instance
const mock = new MockAdapter(axios);

// Define your mock student data
const mockStudentsData = [
  { id: 1, name: 'Alice Smith', email: 'alice.smith@example.com', course: 'Computer Science' },
  { id: 2, name: 'Bob Johnson', email: 'bob.johnson@example.com', course: 'Mathematics' },
  { id: 3, name: 'Charlie Brown', email: 'charlie.brown@example.com', course: 'Physics' },
  { id: 4, name: 'Diana Lee', email: 'diana.lee@example.com', course: 'Computer Science' },
  { id: 5, name: 'Ethan Williams', email: 'ethan.williams@example.com', course: 'Biology' },
  { id: 6, name: 'Fiona Green', email: 'fiona.green@example.com', course: 'Mathematics' },
];

// Mock the GET request to /api/students
mock.onGet('/api/students').reply(200, mockStudentsData);

// You can add more mock routes here if needed for other functionalities later.

export default mock; // Optionally export the mock instance if you need to configure it further elsewhere