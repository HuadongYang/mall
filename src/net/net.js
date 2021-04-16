import axios from 'axios'
import qs from "qs";


// 一个 axios 实例
let service;
//请求头
//初始化net模块，传入config、错误码字典和退出方法
export function INIT_NET(config) {
    //已初始化，直接返回
    if (service) { return }
    
    axios.defaults.timeout = 10000;
    // 创建一个 axios 实例
    service = axios.create({
        baseURL: config && config.basePath || "http://localhost:8082",
        timeout: 10000, // 请求超时时间
    });
    // 请求拦截器
    service.interceptors.request.use(
        config => {
            // 在请求发送之前做一些处理
            if (!(/^https:\/\/|http:\/\//.test(config.url))) {
                // const token = util.cookies.get('token')
                // if (token && token !== 'undefined') {
                //     // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
                //     config.headers['X-Token'] = token
                // }
            }
            return config
        },
        error => {
            Promise.reject(error)
        }
    )
    // 响应拦截器
    service.interceptors.response.use(
        response => {
            // dataAxios 是 axios 返回数据中的 data
            let dataAxios = response.data;
            if (!dataAxios.success && !dataAxios.message) {
            }
            return dataAxios
        },
        error => {
            
            return Promise.resolve({
                sucess: false,
            })

        }
    )
}
/**
 * 存储已经发送的请求
 */
const AjaxPool = {};

/**
 *  基础 ajax 结构
 *
 * @param {string} [method='post']
 * @param {string} [url='']
 * @param {Object} [data={}]
 * @returns
 */
const BaseAjax = (method = 'post', url = '', data = {}, params, options = {}, headers = {}) => {
    if (!service) {
        //eslint-disable-next-line
        console.log("请先调用INIT_NET进行初始化！");
        return;
    }
    return new Promise((resolve, reject) => {
        if (AjaxPool[url]) {
            if (options.abortOldXHR) {
                try {
                    AjaxPool[url].abort();
                } catch (error) {
                    // eslint-disable-next-line
                    //console.log(error, url);
                }
            } else {
                resolve({
                    success: false,
                    message: '您的操作太快了!'
                });
                // eslint-disable-next-line
                console.log(url);
                return false;
            }
        }

       
        AjaxPool[url] = service({
            method,
            url: url + (params ? '?' + qs.stringify(params) : ''),
            data,
        }).then(resobj => {
            resolve(resobj)
        }).catch(
            e => {
                 reject(e) 
                }
        ).finally(() => {
            AjaxPool[url] = false;
            
        })
    })
}

export const GET = ({
    url = '',
    data = {},
    params = '',
    headers = {},
    options = {},
}) => BaseAjax('get', url, qs.stringify(data), params, options, headers)

export
    /**
     * 
     * formdata post 
     * 
     * @param {*} {
     *     url = '',
     *     data = {}
     * }
     */
    const POST = ({
        url = '',
        data = {},
        params = '',
        options = {},
        headers = {}
    }) => BaseAjax('post', url, qs.stringify(data), params, options, headers)

export const _POST = ({
    url = '',
    data = {},
    params = '',
    headers = {},
    options = {}
}) => BaseAjax('post', url, data, params, options, headers)

export const PUT = ({
    url = '',
    data = {},
    params = '',
    headers = {},
    options = {}
}) => BaseAjax('put', url, data, params, options, headers)

export const DEL = ({
    url = '',
    data = {},
    params = '',
    headers = {},
    options = {}
}) => BaseAjax('delete', url, data, params, options, headers)


export default {
    INIT_NET,
    GET,
    POST,
    _POST,
    PUT,
    DEL,
}

