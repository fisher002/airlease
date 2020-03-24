import axios from 'axios'
const baseUrl = "/api"
const url = "/sk/login"

export default {
    checkLoginAdmin (params){
        return axios({
            url: baseUrl + url + `/admin`,
            method: 'post',
            params: params
        })
    },
}