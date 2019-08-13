import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, Image, Alert } from 'react-native';
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

	render () {
		const { imageUri } = this.state;
		return (
			<View style={styles.ImagePicker}>
				<View style={styles.imagePreview}>
					{!imageUri ? <Text>No image yet.</Text> : <Image style={styles.image} source={{ uri: imageUri }} />}
				</View>
				<Button title="Take Image" onPress={() => this.takeImageHandler()} />
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
		height: 200,
		marginBottom: 10,
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
