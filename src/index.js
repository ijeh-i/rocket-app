import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import dva from 'dva';
import createLoading from 'dva-loading';
import createBrowserHistory from 'history/createBrowserHistory';
import RouterConfig from './router';

const app = dva({
	...createLoading({ effects: true }),
	params: 'window.location',
	history: createBrowserHistory(),
});

// Model
app.model(require('./models/app').default);
app.model(require('./models/rocket').default);

app.router(RouterConfig);

app.start('#root');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
