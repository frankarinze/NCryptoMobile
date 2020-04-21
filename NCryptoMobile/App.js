import React, { Component } from 'react';
import { StyleSheet, Text, View,AsyncStorage,StatusBar } from 'react-native';
import * as Icon from '@expo/vector-icons';
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import Nav from './src/navigation/Nav';
import { createStore, applyMiddleware, compose, bindActionCreators } from 'redux'
import { Provider, connect, bin } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'
// import store from './store'
import { persistStore, autoRehydrate } from 'redux-persist'
import createAccountFormReducer from './src/reducers/createAccountForm.reducer'
import thunk from 'redux-thunk';
import RootReducer from './src/reducers/index'
import { SetCustomText } from "./src/components";



// const rootReducer = (state = {}, action) => {
//   return state
// }
const store = createStore(RootReducer)
const customTextProps = {
  style: {
    fontSize: 46,
    fontFamily: "nunito-regular"
    // color: 'blue'
  }
};

class App extends Component {
  constructor() {
    super()
    this.state = { rehydrated: false, isLoadingComplete: false }
    this._loadResourcesAsync()
  }
  _loadResourcesAsync = async () => {
    // return Promise.all([
    await Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
      await Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
        'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
        'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf'),
      })
      // SetCustomText(customTextProps);
    this._handleFinishLoading();
    
    // ]);
  };
  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };
  componentWillMount() {
    // persistStore(store, { storage: AsyncStorage}, () => {
    //   this.setState({ rehydrated: true })
    // })
   

    this.setState({ rehydrated: true })
  }
  
  render() {
    
    const { rehydrated, isLoadingComplete } = this.state
    if (!rehydrated || !isLoadingComplete) {
      return (
        <View />
      )}
    return <>
      <Provider store={store}>
      <StatusBar barStyle="dark-content" />
        <Nav />
      </Provider>
    </>
  }
}
// export { store }
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50
  },
});
