import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import AppNavigator from '../routes/AppNavigator'

import demo from './demo'

const reducers = combineReducers({
  nav: createNavigationReducer(AppNavigator),
  demo: demo
})

export default reducers
