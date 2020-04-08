import axios from 'axios'
const baseUrl = "/api"
const url = "/am/admin"

export default {
    getUserComList(params) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/usercom/list`,
            params: params
        })
    },
    deleteUserCom(params) {
        return axios({
            method: 'post',
            url: `${baseUrl}${url}/usercom/delete`,
            data: params
        })
    },
    getUserComById(param) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/usercom/get`,
            params: param
        })
    },
    updateUserCom(params) {
        return axios({
            method: 'put',
            url: `${baseUrl}${url}/usercom/update`,
            data: params
        })
    }
}