import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import events from './events';
import employers from './employers';
import profile from './profile';

export default combineReducers({
    alert, auth, events, employers, profile
});