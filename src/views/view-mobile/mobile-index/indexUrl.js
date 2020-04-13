import axios from 'axios'
const baseUrl = "/api"
const url = "/sk/air"
const url2 = "sk/login"

export default {
    getAirList(params) {
        return axios({
            method: 'POST',
            url: baseUrl + url + '/list',
            params: params
        })
    },
    getAirByAirId(param) {
        return axios({
            method: 'POST',
            url: baseUrl + url + '/find',
            params: param
        })
    },
    addLeaseInfo(params) {
        return axios({
            method: 'POST',
            url: `${baseUrl}${url}/lease/add`,
            data: params
        })
    },
    addUserComment(params) {
        return axios({
            method: 'PUT',
            url: `${baseUrl}${url}/leasecomment/add`,
            data: params
        })
    },
    getUserCommentList(params) {
        return axios({
            method: 'POST',
            url: `${baseUrl}${url}/leasecomment/list`,
            params: params
        })
    },
    checkLoginUser (params){
        return axios({
            url: baseUrl + url2 + `/user`,
            method: 'post',
            params: params
        })
    }
}