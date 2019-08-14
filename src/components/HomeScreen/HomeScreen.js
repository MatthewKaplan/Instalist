import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import NavDrawer from '../NavDrawer/NavDrawer';
import {styles} from './styles';

class HomeScreen extends Component {
	componentDidMount () {
		this.props.getFacebookInfo();
	}

	render () {
		return (
			<View style={styles.homeScreenContainer}>
				<NavDrawer name={this.props.userInfo.location}/>
			</View>
		);
	}
}

export const mapStateToProps = state => ({
	userInfo: state.userInfo
});

export default connect(mapStateToProps, actions)(HomeScreen);
