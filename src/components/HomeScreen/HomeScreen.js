import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getFacebookInfo();
  }

	render () {
    console.log(this.props.userInfo)
		return (
			<View>
				<Text>HOMESCREEN</Text>
				<Text>HOMESCREEN</Text>
				<Text>HOMESCREEN</Text>
				<Text>HOMESCREEN</Text>
				<Text>HOMESCREEN</Text>
				<Text>HOMESCREEN</Text>
			</View>
		);
	}
}

export const mapStateToProps = state => ({
  userInfo: state.userInfo
})

export default connect(mapStateToProps, actions)(HomeScreen);
