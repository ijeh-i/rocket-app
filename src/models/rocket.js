import { getShopItems } from '../services/shop';
import { Alert } from '../components/Alert.components';

const storageShopModel = 'cart-app-shop-model';

const initialState = {
	itemList: [],
	cartList: [],
	wishList: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	namespace: 'rocket',
	state: { ...initialState },

	subscriptions: {
		setup({ dispatch, history }) {
			try {
				let shopModel = localStorage.getItem(storageShopModel);
				if (shopModel) {
					dispatch({
						type: 'save',
						payload: JSON.parse(shopModel),
					});
				}
			} catch (err) {
				console.log(err);
			}
		},
	},

	effects: {
		*getAllShopItems({ payload }, { call, put }) {
			const { success, raw, message } = yield call(getShopItems, payload);
			if (success) {
				yield put({ type: 'save', payload: { itemList: raw } });
				console.log(raw);
			} else {
				Alert.error(message);
			}
		},
	},

	reducers: {
		save(state, action) {
			let finalPayload = { ...state, ...action.payload };
			try {
				localStorage.setItem(storageShopModel, JSON.stringify(finalPayload));
			} catch (err) {
				console.log(err);
			}
			return { ...finalPayload };
		},
	},
};
