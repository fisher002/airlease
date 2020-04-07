import axios from 'axios'
const baseUrl = "/api"
const url = "/am/admin"

export default {
    getUserList(params) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/user/list`,
            params: params
        })
    },
    deleteUser(params) {
        return axios({
            method: 'post',
            url: `${baseUrl}${url}/user/delete`,
            data: params
        })
    },
    getUserById(param) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/user/get`,
            params: param
        })
    },
    updateUser(params) {
        return axios({
            method: 'put',
            url: `${baseUrl}${url}/user/update`,
            data: params
        })
    }
}