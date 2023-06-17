import { useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';


  // Create an Axios instance with a base URL
  const axiosSecure = axios.create({
    baseURL: 'https://summer-photo-camp-server.vercel.app/',
  });

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();


  useEffect(() => {
    // Add a request interceptor to inject the authorization header
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Add a response interceptor to handle unauthorized responses (401 or 403)
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)){
          // Call logout asynchronously to clear user data
          await logOut();
          // Redirect the user to the login page
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );

  }, [navigate, logOut]);

  return [axiosSecure];
};

export default useAxiosSecure;
