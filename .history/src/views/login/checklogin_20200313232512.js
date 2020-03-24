import axios from 'axios'

export default {
    checkLogin (params){
        return axios({
            url: `/api/sk/login`,
            method: 'post',
            params: params
        })
    },
}