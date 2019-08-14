import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import NavDrawer from '../NavDrawer/NavDrawer';
import ImagePicker from '../ImagePicker/ImagePicker';
import { Actions } from 'react-native-router-flux';
import { styles } from './styles';
import { connect } from 'react-redux';
import CategoryPicker from '../CategoryPicker/CategoryPicker';

export class CreatePosts extends Component {
	handlePress = () => {
		Actions.postItemInfo();
	}
	render () {
		const { image, category } = this.props;
		return (
			<View style={{ flex: 1 }}>
				<NavDrawer name="Create A New Post">
					<View style={styles.imageContainer}>
						<ImagePicker />
						<CategoryPicker />
						{category && image ?
							<TouchableOpacity onPress={() => this.handlePress()} style={styles.buttonStyle}>
								<Text style={styles.textStyle}>Continue To Post</Text>
							</TouchableOpacity> : null}
					</View>
				</NavDrawer>
			</View>
		);
	}
}

export const mapStateToProps = state => ({
	image: state.postItem.image,
	category: state.postItem.category
});

export const mapDispatchToProps = dispatch => ({
	setItemCategory: category => dispatch(setItemCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePosts);
