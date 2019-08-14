import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome, Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { connect } from 'react-redux';
import { setItemCategory } from '../../actions/index';

export class CategoryPicker extends Component {
	state = { chosenCategory: '' };
	render () {
		const {
			categoryContainer,
			textStyle,
			categoryStyles,
			iconStyles,
			iconBackground,
			elecActive,
			activeText,
			homeActive,
			fashActive,
			carsActive,
			partsActive,
			sportsActive,
			babyActive,
			headPhonesActive
		} = styles;
		const { category } = this.props;
		return (
			<React.Fragment>
				<View style={categoryContainer}>
					<TouchableOpacity
						style={category === 'Electronics' ? elecActive : categoryStyles}
						onPress={() => this.props.setItemCategory('Electronics')}
						>
						<View style={{ backgroundColor: 'rgb(107, 206, 187)', ...iconBackground }}>
							<Ionicons name="ios-phone-portrait" color="#fff" size={55} style={iconStyles} />
						</View>
						<Text style={category === 'Electronics' ? activeText : textStyle}>Electronics</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={category === 'Home and Garden' ? homeActive : categoryStyles}
						onPress={() => this.props.setItemCategory('Home and Garden')}>
						<View style={{ backgroundColor: 'rgb(255, 210, 0)', ...iconBackground }}>
							<MaterialCommunityIcons name="sofa" color="#fff" size={55} style={iconStyles} />
						</View>
						<Text style={category === 'Home and Garden' ? activeText : textStyle}>Home and Garden</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={category === 'Fashion and Accessories' ? fashActive : categoryStyles}
						onPress={() => this.props.setItemCategory('Fashion and Accessories')}
						>
						<View style={{ backgroundColor: 'rgb(253, 125, 145)', ...iconBackground }}>
							<MaterialCommunityIcons name="shoe-heel" color="#fff" size={55} style={iconStyles} />
						</View>
						<Text style={category === 'Fashion and Accessories' ? activeText : textStyle}>Fashion and Accessories</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={category === 'Cars' ? carsActive : categoryStyles}
						onPress={() => this.props.setItemCategory('Cars')}>
						<View style={{ backgroundColor: 'rgb(50, 127, 182)', ...iconBackground }}>
							<FontAwesome name="car" color="#fff" size={55} style={iconStyles} />
						</View>
						<Text style={category === 'Cars' ? activeText : textStyle}>Cars</Text>
					</TouchableOpacity>
				</View>

				<View style={categoryContainer}>
					<TouchableOpacity
						style={category === 'Other' ? partsActive : categoryStyles}
						onPress={() => this.props.setItemCategory('Other')}>
						<View style={{ backgroundColor: 'rgb(251, 134, 54)', ...iconBackground }}>
							<MaterialCommunityIcons name="motorbike" color="#fff" size={55} style={iconStyles} />
						</View>
						<Text style={category === 'Other' ? activeText : textStyle}>Other</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={category === 'Sports, Leisure and Games' ? sportsActive : categoryStyles}
						onPress={() => this.props.setItemCategory('Sports, Leisure and Games')}>
						<View style={{ backgroundColor: 'rgb(163, 206, 113)', ...iconBackground }}>
							<FontAwesome name="soccer-ball-o" color="#fff" size={55} style={iconStyles} />
						</View>
						<Text style={category === 'Sports, Leisure and Games' ? activeText : textStyle}>Sports, Leisure and Games</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={category === 'Baby and Child' ? babyActive : categoryStyles}
						onPress={() => this.props.setItemCategory('Baby and Child')}>
						<View style={{ backgroundColor: 'rgb(32, 195, 243)', ...iconBackground }}>
							<MaterialCommunityIcons name="baby-buggy" color="#fff" size={55} style={iconStyles} />
						</View>
						<Text style={category === 'Baby and Child' ? activeText : textStyle}>Baby and Child</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={category === 'Movies, Books, and Music' ? headPhonesActive : categoryStyles}
						onPress={() => this.props.setItemCategory('Movies, Books, and Music')}>
						<View style={{ backgroundColor: 'rgb(236, 126, 189)', ...iconBackground }}>
							<Feather name="headphones" color="#fff" size={55} style={iconStyles} />
						</View>
						<Text style={category === 'Movies, Books, and Music' ? activeText : textStyle}>Movies, Books, and Music</Text>
					</TouchableOpacity>
				</View>
			</React.Fragment>
		);
	}
}

export const mapStateToProps = state => ({
	userInfo: state.userInfo,
	category: state.postItem.category
});

export const mapDispatchToProps = dispatch => ({
	setItemCategory: category => dispatch(setItemCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPicker);
