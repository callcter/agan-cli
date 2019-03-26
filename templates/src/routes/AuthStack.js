import { createStackNavigator } from 'react-navigation'

import Login from '../containers/auth/login'

const AuthStack = createStackNavigator({
  Login: {
    screen: Login
  }
})

export default AuthStack