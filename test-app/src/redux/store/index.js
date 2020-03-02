import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';
import { sync } from './middleware';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

const dev = process.env.NODE_ENV === 'development';
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = dev && devtools ? devtools : compose;


const history = createBrowserHistory();

const routerMiddleware = createRouterMiddleware(history);

const middleware = [routerMiddleware, thunk, sync];


const persistedState = JSON.parse(localStorage.getItem('@@TestPersistedStateForReactProject'));

export { history };

export default (() =>
    persistedState
        ? createStore(reducer(history), persistedState, composeEnhancers(applyMiddleware(...middleware)))
        : createStore(reducer(history), composeEnhancers(applyMiddleware(...middleware))))();

