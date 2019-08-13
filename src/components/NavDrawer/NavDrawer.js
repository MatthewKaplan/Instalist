import React, { Component } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Drawer from 'react-native-drawer';
import { AntDesign } from '@expo/vector-icons';
import NavMenu from '../NavMenu/NavMenu';
import styles, { drawerStyles } from './styles';

console.disableYellowBox = true;

export class NavDrawer extends Component {
	state = {
		drawerOpen: false
	};

	renderDrawer () {
		return (
			<View style={styles.menuContainer}>
				<NavMenu />
			</View>
		);
	}

	openDrawer = () => {
		this.drawer.open();
	};

	closeDrawer = () => {
		this.drawer.close();
	};

	toggleDrawer = () => {
		const { drawerOpen } = this.state;
		this.setState({ drawerOpen: !drawerOpen });
	};

	render () {
		return (
			<View style={styles.safeAreaStyle}>
				<StatusBar barStyle="dark-content" />
				<View style={styles.mainContainer}>
					<Drawer
						ref={ref => (this.drawer = ref)}
						content={this.renderDrawer()}
						type="static"
						onOpen={this.toggleDrawer}
						onClose={this.toggleDrawer}
						tapToClose={true}
						openDrawerOffset={0.25}
						styles={drawerStyles}>
						<View style={styles.headerContainer}>
							<TouchableOpacity style={styles.menuButton} onPress={this.openDrawer}>
								{this.state.drawerOpen ? (
									<AntDesign
										name="menu-unfold"
										style={styles.menuIcon}
										size={25}
										onPress={() => this.openDrawer()}
										data-test="close-drawer-btn"
									/>
								) : (
									<AntDesign
										name="menu-fold"
										style={styles.menuIcon}
										size={25}
										onPress={() => this.openDrawer()}
										data-test="open-drawer-btn"
									/>
								)}
							</TouchableOpacity>
							<Text style={styles.headerTitle}>{this.props.name || 'Instalist'}</Text>
							<View style={styles.menuButton} />
						</View>
						{this.props.children || null}
					</Drawer>
				</View>
			</View>
		);
	}
}

export default NavDrawer;
