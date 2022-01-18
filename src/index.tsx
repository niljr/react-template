// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './redux/store';
import App from './containers/App/AppContainer';
import reportWebVitals from './utils/reportWebVitals';
// import * as serviceWorkerRegistration from './serviceWorker/serviceWorkerRegistration';
// import { subscribeUser } from './serviceWorker/subscription';

import './styles/styles.scss';

export const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// serviceWorkerRegistration.register();
// subscribeUser();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
