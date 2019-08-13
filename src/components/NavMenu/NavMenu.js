import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Octicons } from '@expo/vector-icons';
import { styles } from './styles';

export class NavMenu extends Component {
	render () {
		return (
			<View style={styles.container}>
				<View style={styles.profileContainer}>
					<View style={styles.headerContainer}>
						<Text style={styles.navHeader}>INSTALIST</Text>
					</View>
					<View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
						<Octicons name="person" size={30} color="#ffffff" style={{paddingRight: 20}} />
						<TouchableHighlight
							underlayColor="#a7a7a7"
							style={styles.button}
							onPress={() => Actions.userProfile()}
							data-test="profile-btn">
							<Text style={styles.buttonTitle}>Profile</Text>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		);
	}
}

export default NavMenu;
