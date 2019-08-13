import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SplashPage extends Component {
	render () {
		return (
			<View style={styles.container}>
				<Image
					style={styles.imageStyle}
					source={{
						uri: 'https://i.imgur.com/WkZUwJj.jpg'
					}}
					resizeMode="cover"
				/>
				<View style={styles.flexContainer}>
					<Text style={{ ...styles.textStyle, height: 150 }}>InstaList</Text>
				</View>
				<TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.facebookLogin()}>
					<Image
						style={styles.facebookBtn}
						source={{
							uri: 'https://i.imgur.com/uXb1DP2.png'
						}}
						resizeMode="contain"
					/>
				</TouchableOpacity>
			</View>
		);
	}
}


export default connect(null, actions)(SplashPage);

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
};
