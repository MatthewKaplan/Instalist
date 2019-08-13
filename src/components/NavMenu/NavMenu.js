import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Octicons, FontAwesome, AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

export class NavMenu extends Component {
	render () {
		return (
			<View style={styles.container}>
				<View style={styles.profileContainer}>
					<View style={styles.headerContainer}>
						<Text style={styles.navHeader}>INSTALIST</Text>
					</View>
					<View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
						<FontAwesome name="home" size={30} color="#ffffff" style={{ paddingRight: 20 }} />
						<TouchableHighlight underlayColor="#a7a7a7" style={styles.button} onPress={() => Actions.homeScreen()}>
							<Text style={styles.buttonTitle}>Home</Text>
						</TouchableHighlight>
					</View>
					<View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
						<FontAwesome name="star" size={30} color="#ffffff" style={{ paddingRight: 20 }} />
						<TouchableHighlight underlayColor="#a7a7a7" style={styles.button} onPress={() => Actions.homeScreen()}>
							<Text style={styles.buttonTitle}>Favorites</Text>
						</TouchableHighlight>
					</View>
					<View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
						<Entypo name="folder" size={30} color="#ffffff" style={{ paddingRight: 20 }} />
						<TouchableHighlight underlayColor="#a7a7a7" style={styles.button} onPress={() => Actions.homeScreen()}>
							<Text style={styles.buttonTitle}>My Posts</Text>
						</TouchableHighlight>
					</View>
					<View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
						<AntDesign name="form" size={30} color="#ffffff" style={{ paddingRight: 20 }} />
						<TouchableHighlight underlayColor="#a7a7a7" style={styles.button} onPress={() => Actions.homeScreen()}>
							<Text style={styles.buttonTitle}>Create Posts</Text>
						</TouchableHighlight>
					</View>
					<View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
						<MaterialIcons name="local-shipping" size={30} color="#ffffff" style={{ paddingRight: 20 }} />
						<TouchableHighlight underlayColor="#a7a7a7" style={styles.button} onPress={() => Actions.homeScreen()}>
							<Text style={styles.buttonTitle}>Recent Orders</Text>
						</TouchableHighlight>
					</View>
					<View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
						<MaterialIcons name="attach-money" size={30} color="#ffffff" style={{ paddingRight: 20 }} />
						<TouchableHighlight underlayColor="#a7a7a7" style={styles.button} onPress={() => Actions.homeScreen()}>
							<Text style={styles.buttonTitle}>Items Sold</Text>
						</TouchableHighlight>
					</View>
					<View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
						<Octicons name="person" size={30} color="#ffffff" style={{ paddingRight: 20 }} />
						<TouchableHighlight underlayColor="#a7a7a7" style={styles.button} onPress={() => Actions.userProfile()}>
							<Text style={styles.buttonTitle}>Profile</Text>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		);
	}
}

export default NavMenu;
