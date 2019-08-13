import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome, Feather } from '@expo/vector-icons';
import { styles } from './styles';

export class CategoryPicker extends Component {
	render () {
		const { categoryContainer, textStyle, categoryStyles } = styles;
		return (
			<React.Fragment>
				<View style={categoryContainer}>
					<View style={categoryStyles}>
						<View style={{ backgroundColor: 'rgb(107, 206, 187)', width: 70, borderRadius: 55, height: 70 }}>
							<Ionicons name="ios-phone-portrait" color="#fff" size={55} style={{ alignSelf: 'center' }} />
						</View>
						<Text style={textStyle}>Electronics</Text>
					</View>
					<View style={categoryStyles}>
						<View style={{ backgroundColor: 'rgb(255, 210, 0)', width: 70, borderRadius: 55, height: 70 }}>
							<MaterialCommunityIcons name="sofa" color="#fff" size={55} style={{ alignSelf: 'center' }}/>
						</View>
						<Text style={textStyle}>Home and Garden</Text>
					</View>
					<View style={categoryStyles}>
						<View style={{ backgroundColor: 'rgb(253, 125, 145)', width: 70, borderRadius: 55, height: 70 }}>
							<MaterialCommunityIcons name="shoe-heel" color="#fff" size={55} style={{ alignSelf: 'center' }}/>
						</View>
						<Text style={textStyle}>Fashion and Accessories</Text>
					</View>

					<View style={categoryStyles}>
						<View style={{ backgroundColor: 'rgb(50, 127, 182)', width: 70, borderRadius: 55, height: 70 }}>
							<FontAwesome name="car" color="#fff" size={55} style={{ alignSelf: 'center' }}/>
						</View>
						<Text style={textStyle}>Cars</Text>
					</View>
				</View>
				<View style={categoryContainer}>
					<View style={categoryStyles}>
						<View style={{ backgroundColor: 'rgb(251, 134, 54)', width: 70, borderRadius: 55, height: 70 }}>
							<MaterialCommunityIcons name="motorbike" color="#fff" size={55} style={{ alignSelf: 'center' }}/>
						</View>
						<Text style={textStyle}>Other Vehicles and Parts</Text>
					</View>
					<View style={categoryStyles}>
						<View style={{ backgroundColor: 'rgb(163, 206, 113)', width: 70, borderRadius: 55, height: 70 }}>
							<FontAwesome name="soccer-ball-o" color="#fff" size={55} style={{ alignSelf: 'center' }}/>
						</View>
						<Text style={textStyle}>Sports, Leisure and Games</Text>
					</View>
					<View style={categoryStyles}>
						<View style={{ backgroundColor: 'rgb(32, 195, 243)', width: 70, borderRadius: 55, height: 70 }}>
							<MaterialCommunityIcons name="baby-buggy" color="#fff" size={55} style={{ alignSelf: 'center' }}/>
						</View>
						<Text style={textStyle}>Baby and Child</Text>
					</View>
					<View style={categoryStyles}>
						<View style={{ backgroundColor: 'rgb(236, 126, 189)', width: 70, borderRadius: 55, height: 70 }}>
							<Feather name="headphones" color="#fff" size={55} style={{ alignSelf: 'center' }}/>
						</View>
						<Text style={textStyle}>Movies, Books, and Music</Text>
					</View>
				</View>
			</React.Fragment>
		);
	}
}

export default CategoryPicker;
