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

axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
    
        if ((error.response.status === 400 || error.response.status === 401) && !originalRequest._retry) {
            originalRequest._retry = true;
    
            try {
                const refreshToken = Cookies.get('refreshToken');
                const response = await axiosInstance.post('/refresh', { refreshToken });
        
                const { accessToken: accessToken, refreshToken: newRefreshToken } = response.data;
                Cookies.set('accessToken', accessToken);
                Cookies.set('refreshToken', newRefreshToken);
        
                originalRequest.headers['Authorization'] = `Coffee ${accessToken}`;
        
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                if (refreshError.response.status === 400 || refreshError.response.status === 401 || refreshError.response.status === 404) {
                    Cookies.remove('accessToken');
                    Cookies.remove('refreshToken');
                    window.location.href = "/";
                }
                return Promise.reject(refreshError);
            }
        }
    
        return Promise.reject(error);
    }
);

export default axiosInstance;