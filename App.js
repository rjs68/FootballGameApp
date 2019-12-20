/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView
} from 'react-native';

import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { PlayGame } from './components/PlayGame';
import { HomeScreen } from './screens/HomeScreen';

class HomeScreenClass extends React.Component {
  constructor(){
    super();
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    this.props.navigation.navigate('Game')
  }

  render() {
    return <HomeScreen handlePress={this.handlePress.bind(this)} />
  }
}

class PlayGameClass extends React.Component {
  render() {
    return <PlayGame />
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreenClass,
    Game: PlayGameClass,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);

// const App: () => React$Node = () => {
//   return (
//     <>
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           scrollEnabled={false}>
//           <HomeScreen />
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// export default App;
