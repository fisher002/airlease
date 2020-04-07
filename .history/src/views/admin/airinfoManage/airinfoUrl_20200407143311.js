import axios from 'axios'
const baseUrl = "/api"
const url = "/am/admin"

export default {
    getAirInfoList(params) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/airinfo/list`,
            params: params
        })
    },
    deleteAirInfo(params) {
        return axios({
            method: 'post',
            url: `${baseUrl}${url}/airinfo/delete`,
            data: params
        })
    },
    getAirInfoById(param) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/airinfo/get`,
            params: param
        })
    },
    updateAirInfo(params) {
        return axios({
            method: 'put',
            url: `${baseUrl}${url}/airinfo/update`,
            data: params
        })
    }
}