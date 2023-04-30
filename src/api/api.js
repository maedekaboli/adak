import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://5.34.202.170:8000/api/v1/',
})

export default instance;