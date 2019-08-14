import { FACEBOOK_USER_INFO } from '../actions/types';

export default function (state = {}, action){
	switch (action.type) {
		case FACEBOOK_USER_INFO:
			return {
				name: action.payload.name,
				location: action.payload.location.name,
        picture: action.payload.picture.data.url,
				email: action.payload.email,
				id: action.payload.id
			};
		default:
			return state;
	}
}
