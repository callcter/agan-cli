import { createSwitchNavigator } from 'react-navigation'

import LoadingScreen from '../containers/loadingScreen'
import BootScreen from '../containers/bootScreen'
import AppStack from './AppStack'
import AuthStack from './AuthStack'

export default createSwitchNavigator({
  Loading: LoadingScreen,
  Boot: BootScreen,
  App: AppStack,
  Auth: AuthStack
}, {
  initialRouteName: 'Loading',
  resetOnBlur: true
})
