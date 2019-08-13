import { AsyncStorage } from 'react-native';
import * as Facebook from 'expo-facebook';

import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL, FACEBOOK_USER_INFO } from './types';

export const facebookLogin = () => async dispatch => {
	let token = await AsyncStorage.getItem('fb_token');
	if (token) {
		dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
	} else {
		startFacebookLogin(dispatch);
	}
};

const startFacebookLogin = async dispatch => {
	let { type, token } = await Facebook.logInWithReadPermissionsAsync('2387052398242940', {
		permissions: [ 'public_profile', 'email', 'user_location' ]
	});

	if (type === 'cancel') {
		return dispatch({ type: FACEBOOK_LOGIN_FAIL });
	}

	await AsyncStorage.setItem('fb_token', token);
	dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};

export const check_token = () => async dispatch => {
	let token = await AsyncStorage.getItem('fb_token');
	if (token) {
		dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
	} else {
		dispatch({ type: FACEBOOK_LOGIN_FAIL });
	}
};

export const getFacebookInfo = () => async dispatch => {
	let token = await AsyncStorage.getItem('fb_token');
	let userInfo = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,location,picture.type(large)`);
	const result = await userInfo.json();
	dispatch({ type: FACEBOOK_USER_INFO, payload: result })
};
