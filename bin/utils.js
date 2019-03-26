const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')
const chalk = require('chalk')

/**
 * 复制模板文件
 *
 */
async function copyTempFiles(){
  try {
    await fse.copy(path.join(__dirname, '../templates/config'), path.join(process.cwd(), 'config'))
    await fse.copy(path.join(__dirname, '../templates/src'), path.join(process.cwd(), 'src'))
    await fse.copy(path.join(__dirname, '../templates/App.js'), path.join(process.cwd(), 'App.js'))
    await fse.copy(path.join(__dirname, '../templates/index.js'), path.join(process.cwd(), 'index.js'))
    console.log(chalk.green('项目初始化完成！'))
  } catch(err) {
    console.log(chalk.red(err))
    process.exit(1)
  }
}

/**
 * 复制生成新的模板文件
 *
 * @param {*} name 新创建的文件名
 * @param {*} type 模板类型 render|action|reducer
 */
async function copyFile(name, type){
  try {
    let sourceFile = path.join(__dirname, `../templates/files/${type}.js`)
    let targetFile = path.join(process.cwd(), `${name}.js`)
    await fse.copy(sourceFile, targetFile)
  } catch(err) {
    console.log(chalk.red(err))
    process.exit(1)
  }
}

/**
 * 生成 package.json 文件
 *
 * @returns
 */
function createPackageJson(){
  let packageJson = require(PACKAGE_JSON_PATH())
  let dependencies = packageJson['dependencies']
  let scripts = packageJson['scripts']
  packageJson['dependencies'] = {
    ...dependencies,
    'redux': 'latest',
    'react-redux': 'latest',
    'react-navigation': 'latest',
    'react-navigation-redux-helpers': 'latest',
    'redux-logger': 'latest',
    'redux-thunk': 'latest',
    'react-native-storage': 'latest',
    'react-native-status-bar-height': 'latest',
    'react-native-vector-icons': 'latest',
    'lodash': 'latest',
    'react-native-tab-view': 'latest',
    'react-native-gesture-handler': 'latest',
    '@react-native-community/async-storage': 'latest',
    '@react-native-community/netinfo': 'latest'
  }
  packageJson['scripts'] = {
    ...scripts,
    "ri": "react-native run-ios",
    "ra": "react-native run-android",
    "refresh": "rm -rf node_modules/ && yarn cache clean && yarn install",
    "refresh-npm": "rm -rf node_modules/ && npm cache verify && npm install",
    "bundle-android-old": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/",
    "bundle-android": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle",
    "bundle-ios": "react-native bundle --platform ios --dev false --entry-file index.js --bundle-output ./ios/bundle/index.ios.jsbundle --assets-dest ./ios/bundle",
    "build-apk": "cd ./android && ./gradlew assembleRelease",
    "clean-android": "cd android && ./gradlew clean && cd ../",
    "release-android": "npm run clean-android && npm run bundle-android && npm run build-apk",
    "link": "RNFB_ANDROID_PERMISSIONS=true react-native link"
  }
  try {
    fs.writeFileSync(path.join(process.cwd(), 'package.json'), JSON.stringify(packageJson, null, 2))
  } catch(err) {
    console.log(chalk.red(err))
    process.exit(1)
  }
}

const PACKAGE_JSON_PATH = function(){
  return path.resolve(
    process.cwd(),
    'package.json'
  )
}

module.exports = {
  copyFile,
  copyTempFiles,
  createPackageJson
}