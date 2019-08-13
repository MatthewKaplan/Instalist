import { AsyncStorage } from 'react-native';
import * as Facebook from 'expo-facebook';

import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

export const facebookLogin = () => async dispatch => {
	let token = await AsyncStorage.getItem('fb_token');
	if (token) {
		// Dispatch an action saying FB login is done
		dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
	} else {
		// Start up FB login process
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
