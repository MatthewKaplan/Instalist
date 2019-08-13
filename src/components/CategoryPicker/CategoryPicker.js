import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome, Feather } from '@expo/vector-icons';
import { styles } from './styles';

export class CategoryPicker extends Component {
	state = { chosenCategory: '' };
	render () {
		const { categoryContainer, textStyle, categoryStyles, iconStyles, iconBackground, elecActive, activeText, homeActive, fashActive, carsActive, partsActive, sportsActive, babyActive, headPhonesActive  } = styles;
		const { chosenCategory } = this.state;
		console.log(this.state.chosenCategory);
		return (
			<React.Fragment>
				<View style={categoryContainer}>
					<TouchableOpacity
						style={chosenCategory === 'electronics' ? elecActive : categoryStyles}
						onPress={() => this.setState({ chosenCategory: 'electronics' })}>
						<View style={{ backgroundColor: 'rgb(107, 206, 187)', ...iconBackground }}>
							<Ionicons name="ios-phone-portrait" color="#fff" size={55} style={iconStyles} />
						</View>
						<Text style={chosenCategory === 'electronics' ? activeText : textStyle}>Electronics</Text>
					</TouchableOpacity>
					<TouchableOpacity style={chosenCategory === 'home' ? homeActive : categoryStyles} onPress={() => this.setState({ chosenCategory: 'home' })}>
						<View style={{ backgroundColor: 'rgb(255, 210, 0)', ...iconBackground }}>
							<MaterialCommunityIcons name="sofa" color="#fff" size={55} style={iconStyles} />
						</View>
						<Text style={chosenCategory === 'home' ? activeText : textStyle}>Home and Garden</Text>
					</TouchableOpacity>
					<TouchableOpacity style={chosenCategory === 'fashion' ? fashActive : categoryStyles} onPress={() => this.setState({ chosenCategory: 'fashion' })}>
						<View style={{ backgroundColor: 'rgb(253, 125, 145)', ...iconBackground }}>
							<MaterialCommunityIcons name="shoe-heel" color="#fff" size={55} style={iconStyles} />
						</View>
						<Text style={chosenCategory === 'fashion' ? activeText : textStyle}>Fashion and Accessories</Text>
					</TouchableOpacity>
					<TouchableOpacity style={chosenCategory === 'cars' ? carsActive : categoryStyles} onPress={() => this.setState({ chosenCategory: 'cars' })}>
						<View style={{ backgroundColor: 'rgb(50, 127, 182)', ...iconBackground }}>
							<FontAwesome name="car" color="#fff" size={55} style={iconStyles} />
						</View>
						<Text style={chosenCategory === 'cars' ? activeText : textStyle}>Cars</Text>
					</TouchableOpacity>
				</View>

				<View style={categoryContainer}>
					<TouchableOpacity style={chosenCategory === 'parts' ? partsActive : categoryStyles} onPress={() => this.setState({ chosenCategory: 'parts' })}>
						<View style={{ backgroundColor: 'rgb(251, 134, 54)', ...iconBackground }}>
							<MaterialCommunityIcons name="motorbike" color="#fff" size={55} style={iconStyles} />
						</View>
						<Text style={chosenCategory === 'parts' ? activeText : textStyle}>Other Vehicles and Parts</Text>
					</TouchableOpacity>
					<TouchableOpacity style={chosenCategory === 'sports' ? sportsActive : categoryStyles} onPress={() => this.setState({ chosenCategory: 'sports' })}>
						<View style={{ backgroundColor: 'rgb(163, 206, 113)', ...iconBackground }}>
							<FontAwesome name="soccer-ball-o" color="#fff" size={55} style={iconStyles} />
						</View>
						<Text style={chosenCategory === 'sports' ? activeText : textStyle}>Sports, Leisure and Games</Text>
					</TouchableOpacity>
					<TouchableOpacity style={chosenCategory === 'baby' ? babyActive : categoryStyles} onPress={() => this.setState({ chosenCategory: 'baby' })}>
						<View style={{ backgroundColor: 'rgb(32, 195, 243)', ...iconBackground }}>
							<MaterialCommunityIcons name="baby-buggy" color="#fff" size={55} style={iconStyles} />
						</View>
						<Text style={chosenCategory === 'baby' ? activeText : textStyle}>Baby and Child</Text>
					</TouchableOpacity>
					<TouchableOpacity style={chosenCategory === 'movies' ? headPhonesActive : categoryStyles} onPress={() => this.setState({ chosenCategory: 'movies' })}>
						<View style={{ backgroundColor: 'rgb(236, 126, 189)', ...iconBackground }}>
							<Feather name="headphones" color="#fff" size={55} style={iconStyles} />
						</View>
						<Text style={chosenCategory === 'movies' ? activeText : textStyle}>Movies, Books, and Music</Text>
					</TouchableOpacity>
				</View>
			</React.Fragment>
		);
	}
}

export default CategoryPicker;
