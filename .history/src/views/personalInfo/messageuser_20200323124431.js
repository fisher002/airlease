import axios from 'axios'
const baseUrl = "/api"
const url = "/sk/operation"

export default {
    findUserById(params) {
        return axios({
            url: baseUrl + url +'/find',
            method: 'post',
            params: params
        });
    }
}