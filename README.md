agan-cli 是一个 react-native 的自动化配置脚手架，在初始化项目中集成了 redux、react-navigation 等优秀的解决方案组件，并对整个项目的目录结构进行了优化。
可能各人喜好不同，请在了解本插件之后再做选择。

### 安装
```
npm i -g agan-cli
```

### 依赖

- react-native-cli

### 使用

```
react-native init projectName
agan init
react-native link
```
依赖 link 的组件
- react-native-vector-icons 图标
- react-native-gesture-handler react-navigation 依赖的手势组件，不安装会报错
- @react-native-community/async-storage AsyncStorage 社区替代方案，以后版本会在 react-native 中移除
- @react-native-community/netinfo NetInfo 社区替代方案，以后版本会在 react-native 中移除

### 介绍

#### 组件

- 使用 redux 作为状态管理工具，同时协助使用 react-redux（连接）、redux-thunk（处理异步）、redux-logger（调试）
- 使用 react-navigation 作为路由工具，同时协助使用 react-navigation-redux-helpers（连接 Redux）
- 使用 react-native-vector-icons 作为图表工具，同时在 components 目录下自定义图标库，使用 iconfont.com 的图标
- 使用 react-native-tab-view 作为 Tab View 工具
- 使用 react-native-status-bar-height 处理状态栏高度问题
- 使用 react-native-storage 处理本地存储
- 使用 lodash 方法库

#### 目录结构

```
ios
android
assets
src
  actions
  components
  containers
  reducers
  routes
config
```