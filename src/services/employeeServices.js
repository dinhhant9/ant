import axios from 'axios';
const resource = '/employees';
axios.defaults.baseURL = 'http://localhost:3000';

export default {
    async getAllEmployee() {
        let data = await axios.get(`${resource}`);
        return data.data
    },

    async getEmployeeByID(id) {
        let data = await axios.get(`${resource}/${id}`)
        return data.data
    },

    async postEmployee(obj) {
        let data = await axios.post(`${resource}`, obj);
        return data.data
    },
    async deleteEmployeeByID(id){
        await axios.delete(`${resource}/${id}`);
        return null
    },
    async updateEmployeeByID(id, obj){
        await axios.put(`${resource}/${id}`, obj);
        return null
    }
}