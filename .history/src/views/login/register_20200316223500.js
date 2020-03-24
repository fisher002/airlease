import axios from 'axios'
const baseUrl = "/api"
const url = "/sk/register/user"

export default {
    toRegister(params) {
        return axios({
            url: baseUrl + url,
            method: 'post',
            data: params
        });
    }
}