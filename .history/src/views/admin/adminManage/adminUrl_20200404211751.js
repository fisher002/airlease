import axios from 'axios'
const baseUrl = "/api"
const url = "/am"

export default {
    getAdminList(params) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/admin/list`,
            params: params
        })
    },
    deleteAdmin(params) {
        return axios({
            method: 'post',
            url: `${baseUrl}${url}/admin/delete`,
            data: params
        })
    },
    getAdminById(param) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}/admin/get`,
            params: param
        })
    }
}