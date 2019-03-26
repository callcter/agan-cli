import { createStackNavigator } from 'react-navigation'

import Tab from './tab'

const AppStack = createStackNavigator({
  Tab: {
    screen: Tab,
    navigationOptions: {
      header: null
    }
  }
})

export default AppStack