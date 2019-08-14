import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import NavDrawer from '../NavDrawer/NavDrawer';
import { connect } from 'react-redux';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';
import { setItemTitle, setItemDescription, setItemPrice } from '../../actions/index';

export class PostItemInfo extends Component {
	state = { successfullyPosted: false };
	render () {
		const { title, description, price } = this.props;
    const { successfullyPosted } = this.state;
		return (
			<View style={{ flex: 1 }}>
				<NavDrawer name="Add more details">
					{!successfullyPosted ? (
						<View style={styles.inputContainer}>
							<View style={styles.titleContainer}>
								<Text style={styles.labelStyle}>Title</Text>
								<TextInput
									value={title}
									onChangeText={title => this.props.setItemTitle(title)}
									style={styles.titleInput}
								/>
							</View>
							<View style={styles.titleContainer}>
								<Text style={styles.labelStyle}>Price</Text>
								<TextInput
									value={price}
									onChangeText={price => this.props.setItemPrice(price)}
									style={styles.titleInput}
								/>
							</View>
							<View style={styles.descriptionContainer}>
								<Text style={styles.labelStyle}>Description</Text>
								<TextInput
									value={description}
									onChangeText={description => this.props.setItemDescription(description)}
									style={styles.descriptionInput}
								/>
							</View>
							<TouchableOpacity onPress={() => this.setState({ successfullyPosted: true })} style={styles.buttonStyle}>
								<Text style={styles.textStyle}>Submit Post</Text>
							</TouchableOpacity>
						</View>
					) : (
						<View style={{ width: '100%', justifyContent: 'center', height: '50%' }}>
							<Text style={{ fontSize: 20, alignSelf: 'center' }}>
								Congratulations, on submitting {title} for sale!
							</Text>
							<TouchableOpacity onPress={() => Actions.homeScreen()} style={{marginTop: 100, ...styles.buttonStyle}}>
								<Text style={styles.textStyle}>Return to Home Page</Text>
							</TouchableOpacity>
						</View>
					)}
				</NavDrawer>
			</View>
		);
	}
}

export const mapStateToProps = state => ({
	title: state.postItem.title,
	description: state.postItem.description,
  price: state.postItem.price,
  item: state.postItem
});

export const mapDispatchToProps = dispatch => ({
	setItemTitle: title => dispatch(setItemTitle(title)),
	setItemDescription: description => dispatch(setItemDescription(description)),
	setItemPrice: price => dispatch(setItemPrice(price))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostItemInfo);
