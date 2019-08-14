import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { styles } from './styles';

class SplashPage extends Component {
	componentWillMount () {
		this.props.check_token();
	}

	componentWillReceiveProps (nextProps) {
		this.redirectToHome(nextProps);
	}

	redirectToHome ({ token }) {
		if (!_.isNull(token)) {
			Actions.homeScreen();
		}
	}

	render () {
		if (_.isNull(this.props.token)) {
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
					<TouchableOpacity style={styles.buttonContainer} onPress={() => Actions.authScreen()}>
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
		} else {
			return null;
		}
	}
}

function mapStateToProps ({ auth }){
	return { token: auth.token };
}

export default connect(mapStateToProps, actions)(SplashPage);
