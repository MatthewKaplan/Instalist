import React, { Component } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { connect } from 'react-redux';
import { setItemImage } from '../../actions/index';
import {styles} from './styles';

export class ImgPicker extends Component {
	verifyPermissions = async () => {
		const result = await Permissions.askAsync(Permissions.CAMERA);
		if (result.status !== 'granted') {
			Alert.alert('You need to grant camera permissions to take pictures');
			return false;
		}
		return true;
	};

	takeImageHandler = async () => {
		const hasPermission = await this.verifyPermissions();
		if (!hasPermission) {
			return;
		}
		const image = await ImagePicker.launchCameraAsync({
			allowsEditing: false,
			aspect: [ 16, 9 ],
			quality: 0.5
		});
		this.props.setItemImage(image.uri);
	};

	pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			aspect: [ 16, 9 ]
		});

		if (!result.cancelled) {
			this.props.setItemImage(result.uri);
		}
	};

	render () {
		const { image } = this.props;
		return (
			<View style={styles.ImagePicker}>
				<View style={styles.imagePreview}>
					{!image ? (
						<View style={styles.iconContainer}>
							<Ionicons
								name="ios-camera"
								color="rgba(0, 0, 0, 0.556)"
								size={75}
								onPress={() => this.takeImageHandler()}
							/>
							<Ionicons name="md-images" color="rgba(0, 0, 0, 0.556)" size={75} onPress={() => this.pickImage()} />
						</View>
					) : (
						<React.Fragment>
							<AntDesign
								name="closecircle"
								color="#fff"
								size={35}
								onPress={() => this.props.setItemImage('')}
								style={styles.removeImageIcon}
							/>
							<Image style={styles.image} source={{ uri: image }} />
						</React.Fragment>
					)}
				</View>
			</View>
		);
	}
}

export const mapStateToProps = state => ({
	userInfo: state.userInfo,
	image: state.postItem.image
});

export const mapDispatchToProps = dispatch => ({
	setItemImage: image => dispatch(setItemImage(image))
});

export default connect(mapStateToProps, mapDispatchToProps)(ImgPicker);
