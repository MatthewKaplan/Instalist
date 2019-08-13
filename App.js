import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './src/Router';
import store from './src/store';

export class App extends Component {
	render () {
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
