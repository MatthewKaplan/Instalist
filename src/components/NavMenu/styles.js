import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1.0,
		paddingTop: 30,
		color: 'black',
		backgroundColor: 'rgba(0, 0, 0, 0.156)'
	},
	profileIcon: {
		marginLeft: 10
	},
	button: {
		width: '100%',
		height: 40,
		justifyContent: 'flex-start',
		paddingLeft: 0,
		alignItems: 'center',
		flexDirection: 'row',
		borderBottomWidth: 0.25,
		borderBottomColor: 'white'
	},
	buttonTitle: {
		fontSize: 18,
		color: '#fff',
		paddingLeft: 5
	},
	profileContainer: {
		marginTop: 10
	},
	profileButton: {
		color: '#E8EAEF',
		width: '100%',
		textAlign: 'left',
		padding: 10,
		marginRight: 10
	},
	navHeader: {
		color: 'white',
		padding: 10,
		fontSize: 20
	},
	headerContainer: {
		borderBottomWidth: 0.25,
		borderBottomColor: 'white'
	},
	tabContainers: {
		flexDirection: 'row',
		marginTop: 20,
		marginLeft: 20
	},
	iconPadding: {
		paddingRight: 20
	}
});
