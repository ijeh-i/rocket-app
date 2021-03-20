import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Header } from './header';

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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
