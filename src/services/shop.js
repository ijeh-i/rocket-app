import request from '../utils/request';
import { endpoint } from '../utils/config';

export async function getShopItems(data) {
	const url = `${endpoint}/rockets`;
	return request({
		url,
		data,
	});
}
