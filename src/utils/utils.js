import moment from 'moment';

export const formatDate = (date) => moment(date).format('DD MMM YYYY');

export const formatCurrency = (number) => {
	if (number !== undefined && number !== null) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
	return number;
};

export const calcViewMode = () => {
	let viewWidth = window.innerWidth;
	if (600 > viewWidth) {
		return 'mobile';
	} else if (900 > viewWidth) {
		return 'tablet';
	} else {
		return 'desktop';
	}
};
