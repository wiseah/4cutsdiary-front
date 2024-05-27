import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
    timeout: 5000, // 10000ms = 10초
});
    
axiosInstance.interceptors.request.use(
    config => {
        const token = Cookies.get('accessToken');
        if (token) {
            config.headers['Authorization'] = token;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    },
);

export default axiosInstance;