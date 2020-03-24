import axios from 'axios'
const baseUrl = "/api"
const url = "/sk/login"

export default {
    checkLogin (params){
        return axios({
            url: baseUrl + url,
            method: 'post',
            params: params
        })
    },
}