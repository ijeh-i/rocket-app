import { connect } from 'dva';
import { ShoppingCart } from './shoppingCart';
import { routerRedux } from 'dva/router';

export const mapStateToProps = (state, ownProps) => {
	const { rocket } = state;
	const { itemList, cartList, wishList } = rocket;
	return {
		itemList,
		cartList,
		wishList,
	};
};

export const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		redirect(pathname, search) {
			dispatch(routerRedux.push({ pathname, search }));
		},
		saveShop(data) {
			dispatch({ type: 'rocket/save', payload: { ...data } });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
