import axios from 'axios'

export default {
    checkLogin (params){
        return axios({
            url: `/sk/login`,
            method: 'post',
            data: params
        })
    },
}