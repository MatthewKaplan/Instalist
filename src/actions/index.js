export * from './auth_actions';

export const setItemImage = text => ({
	type: 'SET_ITEM_IMAGE',
	text
});

export const setItemCategory = text => ({
	type: 'SET_ITEM_CATEGORY',
	text
});

export const setItemTitle = text => ({
	type: 'SET_ITEM_TITLE',
	text
});

export const setItemDescription = text => ({
	type: 'SET_ITEM_DESCRIPTION',
	text
});

export const setItemPrice = text => ({
	type: 'SET_ITEM_PRICE',
	text
});