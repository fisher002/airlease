import axios from 'axios'
const baseUrl = "/api"
const url = "/sk/air"

export default {
    addUserComment(params) {
        return axios({
            method: 'PUT',
            url: `${baseUrl}${url}/leasecomment/add`,
            data: params
        })
    },
    getUserCommentList(params) {
        return axios({
            method: 'POST',
            url: `${baseUrl}${url}/leasecomment/list`,
            params: params
        })
    }
}