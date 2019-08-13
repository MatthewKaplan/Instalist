import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavDrawer from '../NavDrawer/NavDrawer';

export class UserFavorites extends Component {
	render () {
		return (
			<View style={{flex: 1}}>
				<NavDrawer name="My Favorites">
					<Text>USERFAVORITES</Text>
					<Text>USERFAVORITES</Text>
					<Text>USERFAVORITES</Text>
					<Text>USERFAVORITES</Text>
					<Text>USERFAVORITES</Text>
				</NavDrawer>
			</View>
		);
	}
}

export default UserFavorites;
