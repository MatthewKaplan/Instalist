import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export class ImgPicker extends Component {
	state = { imageUri: '' };

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
		this.setState({ imageUri: image.uri });
	};

	pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			aspect: [ 16, 9 ]
		});

		if (!result.cancelled) {
			this.setState({ imageUri: result.uri });
		}
	};

	render () {
		const { imageUri } = this.state;
		return (
			<View style={styles.ImagePicker}>
				<View style={styles.imagePreview}>
					{!imageUri ? (
						<View style={{width: '100%', flexDirection: 'row', justifyContent: "space-around"}}>
							<Ionicons
								name="ios-camera"
								color="rgba(0, 0, 0, 0.556)"
								size={75}
								onPress={() => this.takeImageHandler()}
							/>
							<Ionicons name="md-images" color="rgba(0, 0, 0, 0.556)" size={75} onPress={() => this.pickImage()} />
						</View>
					) : (
						<Image style={styles.image} source={{ uri: imageUri }} />
					)}
				</View>
			</View>
		);
	}
}

export default ImgPicker;

const styles = StyleSheet.create({
	ImagePicker: {
		alignItems: 'center'
	},
	imagePreview: {
		width: '100%',
		height: 380,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#ccc',
		borderWidth: 1
	},
	image: {
		width: '100%',
		height: '100%'
	}
});
