import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import NavDrawer from '../NavDrawer/NavDrawer';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export class MapScreen extends Component {
	state = {
		initialPosition: {
			longitude: 0,
			latitude: 0,
			longitudeDelta: 0,
			latitudeDelta: 0
		},
		markerPosition: {
			latitude: 0,
			longitude: 0
		}
	};

	componentDidMount () {
		navigator.geolocation.getCurrentPosition(
			position => {
				let lat = parseFloat(position.coords.latitude);
				let long = parseFloat(position.coords.longitude);

				let initialRegion = {
					latitude: lat,
					longitude: long,
					latitudeDelta: LATITUDE_DELTA,
					longitudeDelta: LONGITUDE_DELTA
				};

				this.setState({ initialPosition: initialRegion });
				this.setState({ markerPosition: initialRegion });
			},
			error => alert(JSON.stringify(error)),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);

		this.watchID = navigator.geolocation.watchPosition(position => {
			let lat = parseFloat(position.coords.latitude);
			let long = parseFloat(position.coords.longitude);

			let lastRegion = {
				latitude: lat,
				longitude: long,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA
			};

			this.setState({ initialPosition: lastRegion });
			this.setState({ markerPosition: lastRegion });
		});
	}

	componentWillUnmount () {
		navigator.geolocation.clearWatch(this.watchID);
	}

	render () {
		return (
			<View style={{ flex: 1 }}>
				<NavDrawer name="Map">
					<MapView region={this.state.initialPosition} style={{ flex: 1 }}>
						<MapView.Marker coordinate={this.state.markerPosition} />
					</MapView>
				</NavDrawer>
			</View>
		);
	}
}

export default MapScreen;
