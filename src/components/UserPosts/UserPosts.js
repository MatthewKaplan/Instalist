import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavDrawer from '../NavDrawer/NavDrawer';

export class UserPosts extends Component {
	render () {
		return (
			<View style={{flex: 1}}>
				<NavDrawer name="My Current Posts">
					<Text>UserPosts</Text>
					<Text>UserPosts</Text>
					<Text>UserPosts</Text>
					<Text>UserPosts</Text>
					<Text>UserPosts</Text>
				</NavDrawer>
			</View>
		);
	}
}

export default UserPosts;
