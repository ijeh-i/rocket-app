import { connect } from 'dva';
import { LandingPage } from './landingPage';
import { routerRedux } from 'dva/router';

export const mapStateToProps = (state, ownProps) => {
	const { rocket, loading } = state;
	const { itemList, cartList, wishList } = rocket;
	return {
		itemList,
		cartList,
		wishList,
		loadingList: loading.effects['rocket/getAllShopItems'],
	};
};

export const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		redirect(pathname, search) {
			dispatch(routerRedux.push({ pathname, search }));
		},
		getAllShopItems(data) {
			dispatch({ type: 'rocket/getAllShopItems', payload: data });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
