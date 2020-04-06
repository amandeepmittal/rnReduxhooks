import axios from 'axios'

export default axios.create({
    baseURL: 'http://192.168.2.116:8081'
})