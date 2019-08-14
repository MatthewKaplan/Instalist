import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
		flex: 1,
		position: 'relative',
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignContent: 'center'
	},
	text: {
		fontSize: 18
	},
	imageStyle: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#fff'
	},
	flexContainer: {
		position: 'absolute',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'column',
		paddingTop: 75,
		paddingBottom: 75,
		width: '100%',
		alignSelf: 'center'
	},
	textStyle: {
		fontSize: 70,
		fontWeight: 'bold',
		color: '#323232'
	},
	facebookBtn: {
		height: '100%',
		width: '100%',
		position: 'absolute',
		alignSelf: 'center',
		padding: 0
	},
	buttonContainer: {
		height: '12%',
		width: '100%',
		position: 'absolute',
		padding: 0,
		bottom: '7%'
	}
});
