import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { styles } from './styles';

export class UserProfile extends Component {
	render () {
		const { name, location, picture, email } = this.props.userInfo;
		return (
			<View style={styles.container}>
				<View style={styles.profileContainer}>
					<Image
						source={{
							uri: `${picture}`
            }}
            style={{ width: 200, height: 200, borderRadius: 50, marginTop: 150 }}
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
				</View>
			</View>
		);
	}
}

export const mapStateToProps = state => ({
	userInfo: state.userInfo
});

export default connect(mapStateToProps, actions)(UserProfile);
