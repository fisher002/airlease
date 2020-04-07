import axios from 'axios'
const baseUrl = "/api"
const url = "/am/admin"

export default {
    getAirInfoList(params) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/airdetail/list`,
            params: params
        })
    },
    deleteAirInfo(params) {
        return axios({
            method: 'post',
            url: `${baseUrl}${url}/airdetail/delete`,
            data: params
        })
    },
    getAirInfoById(param) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/airdetail/get`,
            params: param
        })
    },
    getAirIds() {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/air/ids`
        })
    },
    getAirInfoIds() {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/airinfo/ids`
        })
    },
    getAirInfoByAirId(param) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/airdetails/get`,
            params: param
        })
    },
    updateAirInfo(params) {
        return axios({
            method: 'put',
            url: `${baseUrl}${url}/airdetail/update`,
            data: params
        })
    }
}