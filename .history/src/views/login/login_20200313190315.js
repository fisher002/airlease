import axios from 'axios'

export default {
    checkLogin (params){
        return axios({
            url: "",
            method: 'post',
            data: params
        })
    }
}