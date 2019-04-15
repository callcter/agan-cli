import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Platform, ToastAndroid, BackHandler, View, PermissionsAndroid } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import { Provider, connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { createReduxContainer, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import thunk from 'redux-thunk'

import reducers from './src/reducers'
import AppNavigator from './src/routes/AppNavigator'

const lastBackPressed = Date.now()
const navMiddleware = createReactNavigationReduxMiddleware(state => state.nav)
const AppNavigatorWithRedux = createReduxContainer(AppNavigator)

class ReduxNavigation extends React.Component {
  handleFirstConnectivityChange(connectionInfo){
    if(connectionInfo.type.toLowerCase() == 'none'){
      if(__DEV__){ console.log('断网') }
    }
  }
  async componentDidMount(){
    if(Platform.OS==='android'){
      BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
      await requestPermission()
    }
    NetInfo.addEventListener('connectionChange', this.handleFirstConnectivityChange)
  }
  componentWillUnmount(){
    if(Platform.OS==='android'){
      BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
    }
    NetInfo.removeEventListener('connectionChange')
  }
  render(){
    const { dispatch, nav } = this.props
    return (
      <View style={{flex: 1, position: 'relative'}}>
        <AppNavigatorWithRedux dispatch={dispatch} state={nav} />
      </View>
    )
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props
    if(!nav.routes[nav.index].index){
      if(lastBackPressed && Date.now() - lastBackPressed <= 2000){
        BackHandler.exitApp()
        return false
      }
      lastBackPressed = Date.now()
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT)
      return true
    }else{
      dispatch(NavigationActions.back())
      return true
    }
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  }
}

const AppWithNavigationState = connect(mapStateToProps)(ReduxNavigation)

const middlewares = [navMiddleware, thunk]

if(__DEV__){
  let logger = require('redux-logger').createLogger()
  middlewares.push(logger)
}

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares)
  )
)

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

async function requestPermission(){
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE
    ])
    if (granted === PermissionsAndroid.RESULTS.GRANTED){}
  } catch (err) {}
}