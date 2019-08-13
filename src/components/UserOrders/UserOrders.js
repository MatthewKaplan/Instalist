import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavDrawer from '../NavDrawer/NavDrawer';

export class UserOrders extends Component {
	render () {
		return (
			<View style={{flex: 1}}>
				<NavDrawer name="My Recent Orders">
					<Text>UserOrders</Text>
					<Text>UserOrders</Text>
					<Text>UserOrders</Text>
					<Text>UserOrders</Text>
					<Text>UserOrders</Text>
				</NavDrawer>
			</View>
		);
	}
}

export default UserOrders;
