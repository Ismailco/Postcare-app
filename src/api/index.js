import axios from "axios";
import {
    UNAUTHORIZED,
    NOT_FOUND,
    SERVER_ERROR,
    SERVICE_UNAVAILABLE,
} from "../constants";

const api = axios.create();

api.interceptors.request.use((request) => {
    const token = localStorage.getItem("user-token");

    if (token) {
        request.headers.common.Authorization = `${JSON.parse(token).token}`;
    }
    return request;
});
