import { connect } from 'dva';
import { RocketDetail } from './rocketDetail';
import { routerRedux } from 'dva/router';

export const mapStateToProps = (state, ownProps) => {
	const { rocket } = state;
	const { itemList } = rocket;
	return {
		itemList,
	};
};

export const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		redirect(pathname, search) {
			dispatch(routerRedux.push({ pathname, search }));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RocketDetail);
