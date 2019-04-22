/**
 * http配置
 */
// 引入axios
import axios from 'axios'
import router from '../router';
import Vue from 'vue'

var token = '';
resetCookies();
function resetCookies() {
    if (window.document.cookie) {
        token = getCookie('token')
    }
}

//获取cookie
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    arr = document.cookie.match(reg)
    if (arr)
        return (arr[2]);
    else
        return null;
};

axios.interceptors.request.use(config => {
    resetCookies();
    if (token != '') {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config
}, error => {
    return Promise.reject(error)
})

// http response 拦截器
axios.interceptors.response.use(
    undefined,
    error => {
        let res = error.response;
        let _this = new Vue();
        switch (res.status) {
            case 401:
                // 返回 401 清除token信息并提示
                window.document.cookie = "";
                //router.replace({
                //  path: '/login',
                //  query: {redirect: router.currentRoute.fullPath}
                //})

                console.log('您还未登录，请先登录！');
            case 403:
                console.log('您没有该操作权限');
            case 500:
                console.log('服务器错误');
        }
        return Promise.reject(error.response.data) // 返回接口返回的错误信息
    });

export default axios