let BASE_URL;
let CLIENT_BASE_URL;

if (process.env.REACT_APP_ENVIRONMENT === 'development') {
	BASE_URL = `https://api.spacexdata.com/v4`;
	CLIENT_BASE_URL = `http://www.sample-dev.com`;
} else if (process.env.REACT_APP_ENVIRONMENT === 'staging') {
	BASE_URL = `https://api.spacexdata.com/v4`;
	CLIENT_BASE_URL = `http://wwww.sample-stage.com`;
} else if (process.env.REACT_APP_ENVIRONMENT === 'production') {
	BASE_URL = `https://api.spacexdata.com/v4`;
	CLIENT_BASE_URL = `https://www.sapmle.com`;
}

module.exports = {
	endpoint: `${BASE_URL}`,
	clientBaseURL: `${CLIENT_BASE_URL}`,
};
