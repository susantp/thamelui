import axios from "axios";

export default axios.create({
    baseURL: 'http://api.thamelmart.test:81/api',
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: true
})