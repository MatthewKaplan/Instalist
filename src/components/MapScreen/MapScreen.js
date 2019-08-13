import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavDrawer from '../NavDrawer/NavDrawer';
import MapView from 'react-native-maps';

export class MapScreen extends Component {
	render () {
		return (
			<View style={{flex: 1}}>
				<NavDrawer>
					<MapView style={{flex: 1}}/>
				</NavDrawer>
			</View>
		);
	}
}

export default MapScreen;
