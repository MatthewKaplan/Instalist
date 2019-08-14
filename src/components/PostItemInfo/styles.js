import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  titleInput: {
    width: '90%',
    height: 0,
    borderWidth: 2,
    flex: 1,
    alignSelf: 'center'
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
  descriptionContainer: {
    height: 180,
    width: '100%',
    marginTop: 25
  },
  titleContainer: {
    height: 60,
  },
  labelStyle: {
    fontSize: 18,
    marginLeft: 20
  },
  descriptionInput: {
    width: '90%',
    height: 180,
    borderWidth: 2,
    flex: 1,
    alignSelf: 'center'
  },
  inputContainer: {
    height: '55%',
    justifyContent: 'center'
  }
});
