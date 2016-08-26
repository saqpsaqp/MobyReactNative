/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

var NavigatorBarRouterMapper = {
  LeftButton: (route, navigator, index, navState) =>
  { 
    if(route.name == 'Login')
      return null;
    return (
      <TouchableHighlight onPress={()=>{
        if(index>0){
          navigator.pop();
        }
      }}>
        <Text style={{marginTop:10,marginLeft:20,color: '#007aff'}}>Atrás</Text>
      </TouchableHighlight>
    ); },
  RightButton: (route, navigator, index, navState) =>
  { return (null); },
  Title: (route, navigator, index, navState) =>
  { 
    if(route.name == 'Login')
      return null;
    return (<Text style={{marginTop:10,color: '#007aff'}}>{route.name}</Text>); },
}

const Login = require('./src/components/loginView');
const Dashboard = require('./src/components/dashboardView');


class MobyReactNative extends Component {

  renderScene(route, navigator) {
    switch (route.name) {
      case 'Login':
        return (<Login navigator={navigator} route={route}></Login>)
      case 'Dashboard':
        return (<Dashboard navigator={navigator} route={route}></Dashboard>)
    }
  }

  render() {
    const routes = [
      { name: 'Login', index: 0 },
      { name: 'Dashboard', index: 1 },
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigatorBarRouterMapper}
            style={{ backgroundColor: 'gray' }}
            />
        }
        style={{ }}
        configureScene={(route)=>{
          if(route.sceneConfig){
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight
        }}
        />
    );
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('MobyReactNative', () => MobyReactNative);
