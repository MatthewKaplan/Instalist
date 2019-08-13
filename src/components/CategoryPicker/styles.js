import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	textStyle: {
		textAlign: 'center'
	},
	categoryContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		height: '38%'
	},
	categoryStyles: {
		width: '25%',
    alignItems: 'center',
		borderWidth: .25,
		flexDirection: 'column',
		justifyContent: 'space-around'
	}
});
