import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/iconfont.css'
import '@/assets/css/reset.css'

import FastClick from 'fastclick'
FastClick.attach(document.body)

const app = createApp(App);

app.use(store).use(router);
app.use(ElementPlus);

app.mount('#app');

function setRem() {
	// 自动适配
	var whdef = 100 / 1920;  // 表示1920的设计图,使用100PX的默认值
	var bodyWidth = document.body.clientWidth;  // 当前窗口的宽度
	var rem = bodyWidth * whdef;   // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
	// 手动适配
	rem = 16;  // 先设置为固定值
	// 设置全局font-size 可更改rem比例
	document.getElementsByTagName('html')[0].style.fontSize = rem + 'px';
}
window.addEventListener('load', setRem);
window.addEventListener('resize', setRem);

