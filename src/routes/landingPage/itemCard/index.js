import { connect } from 'dva';
import { ItemCard } from './itemCard';
import { routerRedux } from 'dva/router';

const mapStateToProps = (state, ownProps) => {
	const { rocket } = state;
	const { itemList, cartList, wishList } = rocket;
	return {
		itemList,
		cartList,
		wishList,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		redirect(pathname, search) {
			dispatch(routerRedux.push({ pathname, search }));
		},
		saveShop(data) {
			dispatch({ type: 'rocket/save', payload: { ...data } });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);
