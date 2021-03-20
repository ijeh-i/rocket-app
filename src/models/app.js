// eslint-disable-next-line import/no-anonymous-default-export
export default {
	namespace: 'app',
	state: {},

	subscriptions: {
		setup({ dispatch, history }) {},
	},

	effects: {
		*sample({}, { call, select, put }) {},
	},

	reducers: {
		save(state, action) {
			return { ...state, ...action.payload };
		},
	},
};
