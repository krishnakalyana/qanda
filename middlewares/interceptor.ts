import axios from "axios";
const instance = axios.create({
    baseURL: process.env.API_URL,
    withCredentials:true
    
  });
axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
  instance.interceptors.response.use((res)=>{
return res
  },(error)=>{
    if(error?.response?.status === 401){
        const redirectUrl = "/login"; 
        window.location.href = redirectUrl;
    }
  });
  export default instance