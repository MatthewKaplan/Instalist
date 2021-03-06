import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1.0,
		backgroundColor: 'white'
	},
	profileContainer: {
		flexDirection: 'row',
		paddingTop: 20,
		justifyContent: 'center',
		backgroundColor: 'white'
	},
	imageStyle: {
		height: 100,
		width: 100,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: '#323232',
		marginBottom: 30
	},
	inputContainerStyle: {
		marginTop: 5,
		flexDirection: 'row',
		fontSize: 16,
		marginRight: 10
	},
	infoContainer: {
		flexDirection: 'row',
		marginTop: 15,
		padding: 10,
		borderBottomColor: '#323232',
		borderBottomWidth: 1
	},
	mainInfoContainer: {
		marginTop: 10,
		flex: 0.5,
		marginBottom: 100,
		padding: 30,
		justifyContent: 'center'
	},
	label: {
		color: '#323232',
		fontSize: 18,
		fontWeight: 'bold',
		margin: 10
	},
	switch: {
		marginTop: 10
	},
	switchContainer: {
		marginTop: 10
	},
	textStyle: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 19,
		fontWeight: '600',
		paddingTop: 12,
		paddingBottom: 12
	},
	buttonStyle: {
		width: '90%',
		margin: 10,
		backgroundColor: '#007aff',
		borderRadius: 5,
		alignSelf: 'center'
	},
	userImage: {
		width: 200,
		height: 200,
		borderRadius: 50,
		marginTop: 50
	}
});
