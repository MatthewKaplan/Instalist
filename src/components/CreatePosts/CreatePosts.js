import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavDrawer from '../NavDrawer/NavDrawer';
import ImagePicker from '../ImagePicker/ImagePicker';
import { styles } from './styles';
import CategoryPicker from '../CategoryPicker/CategoryPicker';

export class CreatePosts extends Component {
	render () {
		return (
			<View style={{ flex: 1 }}>
				<NavDrawer name="Create A New Post">
					<View style={styles.imageContainer}>
						<ImagePicker />
						<CategoryPicker />
					</View>
				</NavDrawer>
			</View>
		);
	}
}

export default CreatePosts;
