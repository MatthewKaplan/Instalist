import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class AuthScreen extends Component {
	componentDidMount () {
		// AsyncStorage.removeItem('fb_token')
		this.props.facebookLogin();
		this.onAuthComplete(this.props);
	}

	componentWillReceiveProps (nextProps) {
		this.onAuthComplete(nextProps);
	}

	onAuthComplete = async props => {
		if (props.token) {
			Actions.homeScreen();
		}
	};

	render () {
		return (
			<View style={styles.spinnerStyle}>
				<ActivityIndicator size={'large'} />
			</View>
		);
	}
}

function mapStateToProps ({ auth }){
	return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);

const styles = {
	spinnerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
};
