import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import { MainNavigator } from './src/config/MainNavigator';

export default class App extends React.Component<{}> {
  render() {
    return (
      <MainNavigator>
        
      </MainNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
