import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../../actions';
import { styles } from './styles';
import NavDrawer from '../NavDrawer/NavDrawer';

export class UserProfile extends Component {
	handleLogOut = () => {
		AsyncStorage.removeItem('fb_token');
		Actions.splashPage();
	}

	render () {
		const { name, location, picture, email } = this.props.userInfo;
		return (
			<View style={styles.container}>
				<NavDrawer name="Profile">
					<View style={styles.profileContainer}>
						<Image
							source={{
								uri: `${picture}`
							}}
							style={{ width: 200, height: 200, borderRadius: 50, marginTop: 50 }}
						/>
					</View>

					<View style={styles.mainInfoContainer}>
						<View style={styles.infoContainer}>
							<Text style={styles.inputContainerStyle}>
								<Text style={styles.label}>Name: </Text>
								{name}
							</Text>
						</View>
						<View style={styles.infoContainer}>
							<Text style={styles.inputContainerStyle}>
								<Text style={styles.label}>Location: </Text>
								{location}
							</Text>
						</View>
						<View style={styles.infoContainer}>
							<Text style={styles.inputContainerStyle}>
								<Text style={styles.label}>Email: </Text>
								{email}
							</Text>
						</View>
						<TouchableOpacity onPress={() => this.handleLogOut()} style={styles.buttonStyle}>
							<Text style={styles.textStyle}>Sign Out</Text>
						</TouchableOpacity>
					</View>
				</NavDrawer>
			</View>
		);
	}
}

export const mapStateToProps = state => ({
	userInfo: state.userInfo
});

export default connect(mapStateToProps, actions)(UserProfile);
