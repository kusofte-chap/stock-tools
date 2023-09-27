import axios from 'axios'
// import qs from 'qs'
// import { getLocalKey } from "../utils/localStore";


const request = axios.create({
    baseURL: import.meta.env.VITE_API_BASE
})

// const requestInterceptor = async(config) => {
//     config.paramsSerializer = {
//         serialize: (params) => qs.stringify(params),
//     }
//     config.headers.Authorization = ` Bearer ${getLocalKey('access_token')}`
//     return config;
// };

// request.interceptors.request.use(requestInterceptor, (error) =>
//     Promise.reject(error)
// );

request.interceptors.response.use(
    (response) => {
        return Promise.resolve(response)
    },
    (error) => {

        return Promise.reject(error)
    }
)
export default request