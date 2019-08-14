const INITIAL_STATE = { image: '', category: '', title: '', description: '', price: '' };

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_ITEM_IMAGE':
			return { ...state, image: action.text };
		case 'SET_ITEM_CATEGORY':
			return { ...state, category: action.text };
		case 'SET_ITEM_TITLE':
			return { ...state, title: action.text };
		case 'SET_ITEM_DESCRIPTION':
			return { ...state, description: action.text };
		case 'SET_ITEM_PRICE':
			return { ...state, price: action.text };
		default:
			return state;
	}
};