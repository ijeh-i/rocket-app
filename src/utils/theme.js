import { lighten } from 'polished';

let PrimaryColor = '#ED3237';
// let PrimaryColor = '#eb34e1';
let QuaternaryDark = '#222126';

export const Theme = {
	PrimaryColor: PrimaryColor,

	PrimaryFontSize: '16px',
	SecondaryFontSize: '13px',

	PrimaryFontFamily: 'NunitoSans',
	SecondaryFontFamily: 'CircularStd',

	PrimaryFontColor: '#939393',
	PrimaryLineHeight: '1.6rem',

	PrimaryRadius: '3px',
	SecondaryRadius: '5px',

	PrimaryTransition: '0.3s ease-out',

	PrimaryGreen: '#28a745',
	PrimaryRed: '#FD0541',
	PrimaryYellow: '#ffc107',
	PrimaryBlue: '#2d2dea',
	PrimaryOrange: '#FFA500',
	SecondaryColor: lighten(0.1, PrimaryColor),

	// Light Theme
	PrimaryDark: '#ffffff',
	SecondaryDark: '#f6f6f6',
	TertiaryDark: '#eeeeee',
	QuaternaryDark: '#ffffff',

	PrimaryTextColor: '#707070',
	SecondaryTextColor: '#9B9B9B',
	TertiaryTextColor: PrimaryColor,

	SideBarColor: '#F5F5F5',

	PrimaryBorderColor: '#9B9B9B',
	SecondaryBorderColor: '#707070',
};
