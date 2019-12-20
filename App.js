/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView
} from 'react-native';

import { PlayGame } from './components/PlayGame';
import { HomeScreen } from './screens/HomeScreen';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          scrollEnabled={false}>
          <HomeScreen />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
