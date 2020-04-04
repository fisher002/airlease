import axios from 'axios'
const baseUrl = "/api"
const url = "/am"

export default{
    getAdminList(params) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/admin/list`,
            params: params
        })
    }
}