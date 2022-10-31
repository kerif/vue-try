import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import http from '../数据交互/axios/axios.js'

  // console.log("axios全局配置");
  //axios全局配置
    process.env.Node_ENV = 'development';
    //根据当前环境改变默认请求url
    if(process.env.Node_ENV == 'development') {
    axios.defaults.baseURL = '/development';
    }
    else if(process.env.Node_ENV == 'debug') {
    axios.defaults.baseURL = '/debug';
    }
    else if(process.env.Node_ENV == 'production') {
    axios.defaults.baseURL = '/production';
    }

    //设置请求超时时间
    axios.defaults.timeout = 1000; //一秒超时

    //设置post请求头默认格式
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

Vue.config.productionTip = false;

Vue.prototype.$http = http;

//Mock代码
import '../数据交互/Mock/dataServer'

new Vue({
  render: h => h(App),
}).$mount('#app')
