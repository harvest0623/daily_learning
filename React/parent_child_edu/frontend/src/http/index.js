import axios from 'axios';
import { Toast } from 'antd-mobile';

axios.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 请求拦截
axios.interceptors.request.use(request => {
    const token = localStorage.getItem('token');
    if (token) {
        request.headers.Authorization = token;
    }
    return request;
})

// 响应拦截
axios.interceptors.response.use(
    (response) => {  //逻辑性错误
        if(response.data.code !== 1){
            Toast.show({
                icon: 'fail',
                content: response.data.message
            });
            return Promise.reject(response.data);
        }
        return response;
    },
    (error) => {  // 程序性错误
       if(error.status !== 200) {
            Toast.show({
                icon: 'fail',
                content: response.data.message
            });
            if (error.status === 416) {  // 没有权限
                // 重定向去到登录页
                localStorage.removeItem('token');
                window.location.href = '/login';
            }
            return Promise.reject(response);
       }
       return error;
    }
)

export default axios;