import axios from 'axios';

 const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  // return an instance of axios
  return axios.create({
    baseURL: 'https://hair-care-backend.herokuapp.com/',
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;