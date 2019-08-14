import React from 'react';
import { StatusBar } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import SplashPage from './components/SplashPage/SplashPage';
import HomeScreen from './components/HomeScreen/HomeScreen';
import AuthScreen from './components/AuthScreen/AuthScreen';
import UserProfile from './components/UserProfile/UserProfile';
import MapScreen from './components/MapScreen/MapScreen';
import UserFavorites from './components/UserFavorites/UserFavorites';
import UserPosts from './components/UserPosts/UserPosts';
import CreatePosts from './components/CreatePosts/CreatePosts';
import UserOrders from './components/UserOrders/UserOrders';
import UserItemsSold from './components/UserItemsSold/UserItemsSold';
import PostItemInfo from './components/PostItemInfo/PostItemInfo';

const RouterComponent = () => {
	return (
		<React.Fragment>
			<StatusBar barStyle="dark-content" />
			<Router>
				<Scene key="root" panHandlers={null}>
					<Scene key="splashPage" component={SplashPage} hideNavBar={true} />
					<Scene key="homeScreen" component={HomeScreen} hideNavBar={true} />
					<Scene key="authScreen" component={AuthScreen} hideNavBar={true} />
					<Scene key="userProfile" component={UserProfile} hideNavBar={true} />
					<Scene key="mapScreen" component={MapScreen} hideNavBar={true} />
					<Scene key="userFavorites" component={UserFavorites} hideNavBar={true} />
					<Scene key="userPosts" component={UserPosts} hideNavBar={true} />
					<Scene key="createPosts" component={CreatePosts} hideNavBar={true} />
					<Scene key="userOrders" component={UserOrders} hideNavBar={true} />
					<Scene key="itemsSold" component={UserItemsSold} hideNavBar={true} />
					<Scene key="postItemInfo" component={PostItemInfo} hideNavBar={true} />
				</Scene>
			</Router>
		</React.Fragment>
	);
};

export default RouterComponent;
