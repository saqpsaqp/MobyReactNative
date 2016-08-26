'use strict'  //Javascript stricto

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class dashboardView extends Component{
	render(){
		return(
			<View>
				<Text>Soy el componente Dashboard</Text>
			</View>
		);
	}
}

module.exports = dashboardView;