import { StatusCodes } from 'http-status-codes';
import axios from 'axios';
import { HOME } from '../../constants/routes';
import { BASE_URL } from './routes';

const AxiosPokemonClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

AxiosPokemonClient.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        let res = error.response;
        if (res.status == StatusCodes.UNAUTHORIZED) {
            window.location.href = HOME;
    }
        console.error("Looks like there was a problem.Status Code: “ + res.status");
        return Promise.reject(error);
    }
);

export default AxiosPokemonClient;