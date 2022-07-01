import axios from 'axios';

export function loginService(data){
    return axios.post('http://localhost:8080/api/v1/auth/sign-in', data)
        .then((response) => response.data)
        .catch((error) => console.log(error.response.data));
}