/**
 * 描述：包含 N 个接口请求函数的模块
 * 函数返回值：promise对象
 */
import ajax from './ajax.js';
//const BASE_URL = 'http://localhost:8081'
const BASE_URL = '/api';

// 1.发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/index.html', {phone});

