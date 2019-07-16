import axios from 'axios';
const resource = '/users';
axios.defaults.baseURL = 'http://localhost:3000';

export default {
    async login() {
        let data = await axios.get(`${resource}`)
        return data.data
    }
}
