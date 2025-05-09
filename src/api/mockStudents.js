import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

const mockStudentsData = [
  { id: 1, name: 'Alice Smith', email: 'alice.smith@example.com', course: 'Computer Science' },
  { id: 2, name: 'Bob Johnson', email: 'bob.johnson@example.com', course: 'Mathematics' },
  { id: 3, name: 'Charlie Brown', email: 'charlie.brown@example.com', course: 'Physics' },
  { id: 4, name: 'Diana Lee', email: 'diana.lee@example.com', course: 'Computer Science' },
  { id: 5, name: 'Ethan Williams', email: 'ethan.williams@example.com', course: 'Biology' },
  { id: 6, name: 'Fiona Green', email: 'fiona.green@example.com', course: 'Mathematics' },
];

mock.onGet('/api/students').reply(200, mockStudentsData);


export default mock; 