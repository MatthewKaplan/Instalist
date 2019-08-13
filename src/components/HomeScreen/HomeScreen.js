import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Actions } from 'react-native-router-flux';
import NavDrawer from '../NavDrawer/NavDrawer';

class HomeScreen extends Component {
	componentDidMount () {
		this.props.getFacebookInfo();
	}

	render () {
		return (
			<View style={{flex: 1}}>
				<NavDrawer name={this.props.userInfo.location}/>
			</View>
		);
	}
}

export const mapStateToProps = state => ({
	userInfo: state.userInfo
});

export default connect(mapStateToProps, actions)(HomeScreen);
