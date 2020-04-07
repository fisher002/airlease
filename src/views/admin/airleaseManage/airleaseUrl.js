import axios from 'axios'
const baseUrl = "/api"
const url = "/am/admin"

export default {
    getAirLeaseList(params) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/airlease/list`,
            params: params
        })
    },
    deleteAirLease(params) {
        return axios({
            method: 'post',
            url: `${baseUrl}${url}/airlease/delete`,
            data: params
        })
    },
    getAirLeaseById(param) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/airlease/get`,
            params: param
        })
    },
    updateAirLease(params) {
        return axios({
            method: 'put',
            url: `${baseUrl}${url}/airlease/update`,
            data: params
        })
    }
}