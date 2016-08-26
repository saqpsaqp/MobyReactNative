'use strict'  //Javascript stricto

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableHighlight
} from 'react-native';

class loginView extends Component{
	render(){
		return(
			<Image style={styles.container} source={{uri: 'https://images.unsplash.com/1/work-station-straight-on-view.jpg?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb'}}>
			<View >
			<Text style={styles.title}>SuperHero</Text>
				<TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.boton}>
					<Text style={styles.textoBoton}>Login</Text>
				</TouchableHighlight>
				
			</View>
			</Image>
		);
	}

	onLogin(){
		console.log('has pulsado un boton');
		Alert.alert(
			'Acceso',
			'Te has logueado',
			[
				{
					text: 'Aceptar',
					onPress: (this.aceptar.bind(this))
				},
				{
					text: 'Cancelar',
					onPress: (this.cancelar.bind(this))
				}
			]
		)
	}

	aceptar(){
		this.props.navigator.push({
			title: 'Dashboard',
			name: 'Dashboard',
			passProps: {}
		});
	}

	cancelar(){
		console.log('has pulsado cancelar');
	}

}

const styles = StyleSheet.create({
	container: {
    	flex: 1,
		alignItems: 'stretch',
		padding: 30
  	},
	title: {
		marginTop: 120,
		fontSize: 20,
		color: 'white',
		textAlign: 'center'
	},
	boton:{
		width: 300,
		height: 30,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
		borderRadius: 8,
		borderWidth: 1
	},
	textoBoton:{
		marginTop: 50,
		color: 'white'
	}

});

module.exports = loginView;