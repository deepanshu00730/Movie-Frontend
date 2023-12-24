import axios from "axios";

export default axios.create({
    //baseURL:'https://9028-2405-201-301b-3129-c551-6c86-e494-7bc3.ngrok-free.app/',
    //baseURL: 'http://localhost:8080/',
    baseURL: 'https://movie-api-hrhq.onrender.com/',
    headers: {"ngrok-skip-browser-warning": "true"}
});