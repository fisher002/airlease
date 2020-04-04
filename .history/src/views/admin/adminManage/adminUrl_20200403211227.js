import axios from 'axios'
const baseUrl = "/api"
const url = "/sk/air"

export default{
    getAdminList(params) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/`,
            params: params
        })
    }
}