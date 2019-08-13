import { combineReducers } from 'redux';
import auth from './auth_reducer';
import userInfo from './user_info_reducer';

export default combineReducers({
	auth,
	userInfo
});
