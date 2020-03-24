import axios from 'axios'
const baseUrl = "/api"
const url = "/sk/register/user"

export default {
    toRegisterUser(params) {
        return axios({
            url: baseUrl + url,
            method: 'post',
            data: params
        });
    }
}