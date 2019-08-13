import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavDrawer from '../NavDrawer/NavDrawer';

export class CreatePosts extends Component {
	render () {
		return (
			<View style={{flex: 1}}>
				<NavDrawer name="Create A New Post">
					<Text>CreatePosts</Text>
					<Text>CreatePosts</Text>
					<Text>CreatePosts</Text>
					<Text>CreatePosts</Text>
					<Text>CreatePosts</Text>
				</NavDrawer>
			</View>
		);
	}
}

export default CreatePosts;
