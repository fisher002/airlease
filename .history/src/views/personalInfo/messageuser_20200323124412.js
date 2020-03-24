import axios from 'axios'
const baseUrl = "/api"
const url = "/sk/operation"

export default {
    findUserById(params) {
        return axios({
            method: 'post',
            url: baseUrl + url +'/find',
            params: params
        });
    }
}