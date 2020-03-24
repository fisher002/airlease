import axios from 'axios'
const baseUrl = "/api"
const url = "/sk/user"

export default {
    findUserById(param) {
        return axios({
            url: baseUrl + url + '/find',
            method: 'post',
            params: param
        });
    },
    updateUser(params) {
        return axios({
            url: baseUrl + url + '/edit',
            method: 'patch',
            data: params
        })
    },
}