/**
 * 登录组件api
 */

import fetch from 'utils/fetch';

/**
 * 发送登录请求
 */
export function sendLogin(data) {
	return new fetch({
		url: '/api/login',
		method: 'post',
		data
	})
}