import axios from 'axios'

//development开发环境
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'http://localhost:3001/api'
}
if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'https://www.muanana7mi.com/api'
}

//请求超时时间为20秒
// axios.defaults.timeout = 20000;

axios.interceptors.request.use(
    config => {
        config.headers = { DeviceType: "H5" }
        return config
    }
)

//封装get
export function get(url, params) {
    return new Promise((resolve, rejects) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res)
        }).catch(err => {
            rejects(err)
        })
    })
}

//封装post
export function post(url, data = {}) {
    return new Promise((resolve, rejects) => {
        axios.post(url, data).then(res => {
            resolve(res.data)
        }, err => {
            rejects(err)
        })
    })
}
