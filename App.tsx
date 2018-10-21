import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import { MainNavigator } from './src/config/MainNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store';

interface State {
  ready: boolean;
}

export default class App extends React.Component<null, State> {

  state = {
    ready: false
  }

  async componentWillMount(){
    await loadFonts();
    this.setState({ready: true})
  }

  render() {
    const { ready } = this.state;
    if (ready) return this.renderReady();
    else return this.renderNotReady();
  }

  renderNotReady = () => {
    return null;
  }

  renderReady = () => {
    return (
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    );
  }
}

async function loadFonts(){
  await Expo.Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
  });
}
