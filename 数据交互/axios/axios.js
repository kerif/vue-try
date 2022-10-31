//axios的二次封装 一次封装是指将get post等方法封装
import axios from "axios";
import config from "./config/config";
class HttpRequest{
    interceptors(instance) {
        //请求拦截器
        instance.interceptors.request.use((config) => {
            console.log("发送请求前做些什么");
            return config;

        }, (error) => {
            console.log("发出请求错误!");
            return  Promise.reject(error) 
        })
        //响应拦截器
        instance.interceptors.response.use((response) => {
            console.log("在返回响应前做点什么");
            return response;
        } , (error) => {
            console.log("返回请求发送错误");
            return Promise.reject(error);   
        })
    }

    //封装get方法
    get(url, params) {
        const instance = axios.create({
            ...config.config_dev
        });
        //console.log(instance);
        this.interceptors(instance); //拦截器
        return  new Promise((resolve,reject) => {
            instance.get(url, {
                params: params,
            }).then((res) => {
                console.log(res);
                resolve(res);
            }).catch(error => {
                reject(error)
            });
            
        })
    }

    //封装post方法 跟get差不多 不过要qs序列化

}
export default new HttpRequest;


