import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:8888'
    baseURL: 'https://blog-posts-backend-production.up.railway.app'
});

export const getPosts = async () => {
  const { data } = await instance.get("/posts");
  console.log(data);
  return data;
};

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
});



export default instance;