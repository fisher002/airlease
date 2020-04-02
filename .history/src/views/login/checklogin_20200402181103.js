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
    checkLoginUser (params){
        return axios({
            url: baseUrl + url + `/user`,
            method: 'post',
            params: params
        })
    },
}