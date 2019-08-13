import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavDrawer from '../NavDrawer/NavDrawer';

export class UserItemsSold extends Component {
	render () {
		return (
			<View style={{flex: 1}}>
				<NavDrawer name="My Recently Sold Items">
					<Text>ITEMS SOLD!</Text>
					<Text>ITEMS SOLD!</Text>
					<Text>ITEMS SOLD!</Text>
					<Text>ITEMS SOLD!</Text>
					<Text>ITEMS SOLD!</Text>
				</NavDrawer>
			</View>
		);
	}
}

export default UserItemsSold;
