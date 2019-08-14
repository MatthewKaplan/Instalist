import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	ImagePicker: {
		alignItems: 'center'
	},
	imagePreview: {
		width: '100%',
		height: 380,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#ccc',
		borderWidth: 1
	},
	image: {
		width: '100%',
		height: '100%'
	},
	iconContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	removeImageIcon: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		top: '2%',
		zIndex: 999,
		left: '88%'
	}
});
