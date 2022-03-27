/**
 * ajax 请求函数模块
 * 返回值：promise对象（异步返回的数据是：response.data）
 */
import axios from 'axios'
export default function ajax(url, data={}, type='GET') {
	return new Promise((resolve, reject) => {
		// 执行异步 ajax 请求
		let promise;
		if (type.toUpperCase() === 'GET') {
			// 准备 url query 参数数据
			let dataStr = '';  // 数据拼接字符串
			Object.keys(data).forEach(key => {
				dataStr += key + '=' + data[key] + '&';
			})
			if (dataStr.length > 0) {
				dataStr =dataStr.substring(0, dataStr.lastIndexOf('&'));
				url = url + '?' + dataStr;
			}
			console.log(url);
			// 发送 Get 请求
			promise = axios.get(url)
		}
		else {
			
		}
		promise.then(respose => {
			resolve(respose.data);
		}).catch(error => {
			reject(error);
		})
	})
	
	
}
