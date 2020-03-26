import axios from 'axios'
const baseUrl = "/api"
const url = "/sk/air"

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
    }
}