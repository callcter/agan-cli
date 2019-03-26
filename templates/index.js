import './config/global'  // 全局配置文件

import { AppRegistry } from 'react-native'
import App from './App'
import {name as appName} from './app.json'

AppRegistry.registerComponent(appName, () => App)