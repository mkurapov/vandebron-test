import axios from 'axios';

export default axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://my-json-server.typicode.com/mkurapov/vandebron-test'
    // any config options here
});