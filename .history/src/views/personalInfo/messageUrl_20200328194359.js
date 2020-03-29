import axios from 'axios'
const baseUrl = "/api"
const url = "/sk/user"
const url2 = "/sk/air"

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
    updateUserPassword(params) {
        return axios({
            url: baseUrl + url + '/editPassword',
            method: 'post',
            params: params
        })
    },
    getInfoList(params) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url2}/lease/info`,
            params: params
        })
    },
    delLeaseInfo(param) {
        return axios({
            method: 'post',
            url: `${baseUrl}${url2}/lease/delete`,
            params: param
        })
    },
    getLeaseInfo(param) {
        return axios({
            method: 'post',
            url: `${baseUrl}${url2}/lease/find`,
            params: param
        })
    }
}