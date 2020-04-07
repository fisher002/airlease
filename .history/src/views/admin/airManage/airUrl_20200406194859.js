import axios from 'axios'
const baseUrl = "/api"
const url = "/am/admin"

export default {
    getAirList(params) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/air/list`,
            params: params
        })
    },
    deleteAir(params) {
        return axios({
            method: 'post',
            url: `${baseUrl}${url}/air/delete`,
            data: params
        })
    },
    getAirById(param) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/air/get`,
            params: param
        })
    },
    updateAir(params) {
        return axios({
            method: 'put',
            url: `${baseUrl}${url}/air/update`,
            data: params
        })
    }
}