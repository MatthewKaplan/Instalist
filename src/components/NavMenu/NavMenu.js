import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Octicons, FontAwesome, AntDesign, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

export class NavMenu extends Component {
	render () {
		return (
			<View style={styles.container}>
				<View style={styles.profileContainer}>
					<View style={styles.headerContainer}>
						<Text style={styles.navHeader}>INSTALIST</Text>
					</View>
					<View style={styles.tabContainers}>
						<FontAwesome name="home" size={30} color="#ffffff" style={styles.iconPadding} />
						<TouchableHighlight underlayColor="#a7a7a7" style={styles.button} onPress={() => Actions.homeScreen()}>
							<Text style={styles.buttonTitle}>Home</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.tabContainers}>
						<FontAwesome name="star" size={30} color="#ffffff" style={styles.iconPadding} />
						<TouchableHighlight underlayColor="#a7a7a7" style={styles.button} onPress={() => Actions.userFavorites()}>
							<Text style={styles.buttonTitle}>Favorites</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.tabContainers}>
						<Ionicons name="md-globe" size={30} color="#ffffff" style={styles.iconPadding} />
						<TouchableHighlight underlayColor="#a7a7a7" style={styles.button} onPress={() => Actions.mapScreen()}>
							<Text style={styles.buttonTitle}>Map</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.tabContainers}>
						<Entypo name="folder" size={30} color="#ffffff" style={styles.iconPadding} />
						<TouchableHighlight underlayColor="#a7a7a7" style={styles.button} onPress={() => Actions.userPosts()}>
							<Text style={styles.buttonTitle}>My Posts</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.tabContainers}>
						<AntDesign name="form" size={30} color="#ffffff" style={styles.iconPadding} />
						<TouchableHighlight underlayColor="#a7a7a7" style={styles.button} onPress={() => Actions.createPosts()}>
							<Text style={styles.buttonTitle}>Create Posts</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.tabContainers}>
						<MaterialIcons name="local-shipping" size={30} color="#ffffff" style={styles.iconPadding} />
						<TouchableHighlight underlayColor="#a7a7a7" style={styles.button} onPress={() => Actions.userOrders()}>
							<Text style={styles.buttonTitle}>Recent Orders</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.tabContainers}>
						<MaterialIcons name="attach-money" size={30} color="#ffffff" style={styles.iconPadding} />
						<TouchableHighlight underlayColor="#a7a7a7" style={styles.button} onPress={() => Actions.itemsSold()}>
							<Text style={styles.buttonTitle}>Items Sold</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.tabContainers}>
						<Octicons name="person" size={30} color="#ffffff" style={styles.iconPadding} />
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
