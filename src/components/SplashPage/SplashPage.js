import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SplashPage extends Component {
	render () {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>SPLASHPAGE!</Text>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		position: 'relative',
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignContent: 'center'
	},
	text: {
		fontSize: 18
	}
};
