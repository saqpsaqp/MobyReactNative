'use strict'  //Javascript stricto

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight
} from 'react-native';

class loginView extends Component{
	render(){
		return(
			<View>
				<TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.boton}>
					<Text style={styles.textoBoton}>Login</Text>
				</TouchableHighlight>
				
			< /View>
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
		console.log('has pulsado aceptar');
	}

	cancelar(){
		console.log('has pulsado cancelar');
	}

}

const styles = StyleSheet.create({
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
		color: 'white'
	}

});

module.exports = loginView;