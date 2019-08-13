import React from 'react';
import { StatusBar } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import SplashPage from './components/SplashPage/SplashPage';

const RouterComponent = () => {
	return (
		<React.Fragment>
			<StatusBar barStyle="dark-content" />
			<Router>
				<Scene key="root" panHandlers={null}>
					<Scene key="splashPage" component={SplashPage} hideNavBar={true} />
				</Scene>
			</Router>
		</React.Fragment>
	);
};

export default RouterComponent;
