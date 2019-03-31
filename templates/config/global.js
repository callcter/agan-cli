import { YellowBox, Text, TextInput } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Storage from 'react-native-storage'
import Color from './color'
import adapter from './adapter'

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
  sync: ()=>{}
})

global.storage = storage
global.user = null

global.Adapter = adapter
global.Color = Color
global.rem = adapter.REM

global.headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

// Fetch 封装，log 中显示 fetch详情
global.__fetch = fetch
global._fetch = function (uri, options, ...args) {
  options = Object.assign({},options,{headers:global.headers})
  return global.__fetch(uri, options, ...args).then((response) =>{
    if(__DEV__){ console.info('Request', {uri, options, ...args}, (new Date()).toLocaleString('zh-CN', {timeZone: 'Asia/Shanghai'})) }
    return response.json()
  }).then(resJson => {
    if(__DEV__){ console.log('Response.body', resJson) }
    return resJson
  }).catch(err => {
    if(__DEV__){ console.log('Error', err) }
    return {}
  })
}

// 忽略 warning 提醒
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Required dispatch_sync',
  'RCTBridge required dispatch_sync',
  'Module RCTWeChat',
  'unknown call: "relay:check"',
  "Warning: Can't call setState (or forceUpdate) on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method."
])

// Text、TextInput 全局配置
TextInput.defaultProps = Object.assign({}, TextInput.defaultProps, {defaultProps: false, underlineColorAndroid: 'transparent'})
Text.defaultProps = Object.assign({}, Text.defaultProps, {
  allowFontScaling: false,  // 不跟随系统字体大小变化
  fontSize: 14,
  color: Color.f_body
})