import { combineReducers } from 'redux';
import auth from './auth_reducer';
import userInfo from './user_info_reducer';
import postItem from './post_item_reducer';

export default combineReducers({
	auth,
	userInfo,
	postItem
});
