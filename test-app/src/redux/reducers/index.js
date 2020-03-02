import { combineReducers } from 'redux';
import userData from './user';
import { connectRouter } from 'connected-react-router';


export default history => combineReducers({ userData, router: connectRouter(history) });
