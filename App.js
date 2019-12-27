/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View
} from 'react-native';

import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { PlayGame } from './components/PlayGame';
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { PickTeamScreen } from './screens/PickTeamScreen';
import { GameHomeScreen } from './screens/GameHomeScreen';

let homeTeam = "";
let awayTeam = "";

const setHomeTeam = team => {
  homeTeam = team;
}

const setAwayTeam = team => {
  awayTeam = team;
}

class HomeScreenClass extends React.Component {
  constructor(){
    super();
    this.handleHomePress = this.handleHomePress.bind(this);
    this.state = { realm: null };
  }

  handleHomePress() {
    this.props.navigation.navigate('Login')
  }

  render() {
    return <HomeScreen handlePress={this.handleHomePress.bind(this)} />
  }
}

class LoginScreenClass extends React.Component {
  constructor(){
    super();
    this.handleLoginPress = this.handleLoginPress.bind(this);
  }

  handleLoginPress() {
    this.props.navigation.navigate('PickTeam')
  }

  render() {
    return <LoginScreen handlePress={this.handleLoginPress.bind(this)} />
  }
}

class PickTeamScreenClass extends React.Component {
  constructor(){
    super();
    this.handleLoginPress = this.handleLoginPress.bind(this);
  }

  handleLoginPress() {
    this.props.navigation.navigate('GameHome')
  }

  render() {
    return <PickTeamScreen handlePress={this.handleLoginPress.bind(this)} setHomeTeam={setHomeTeam} setAwayTeam={setAwayTeam} />
  }
}

class GameHomeScreenClass extends React.Component {
  constructor(){
    super();
  }

  render() {
    return <GameHomeScreen/>
  }
}

class PlayGameClass extends React.Component {
  render() {
    return <PlayGame homeTeam={homeTeam} awayTeam={awayTeam}/>
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreenClass,
    Login: LoginScreenClass,
    GameHome: GameHomeScreenClass,
    PickTeam: PickTeamScreenClass
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
