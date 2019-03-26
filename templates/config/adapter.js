import { Dimensions, PixelRatio, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const { width, height } = Dimensions.get('window')
const density = PixelRatio.get()

// 设计图以 iphone 6 为标准
const BASE_WIDTH = 375
const BASE_HEIGHT = 667
const rem = width / BASE_WIDTH

const adapter = {
  isIOS: Platform.OS === 'ios',
  width: width,
  height: height,
  
  height_f: 44 * rem, // footer 高度
  height_h: 44 * rem, // header 高度
  height_t: 44 * rem, // tab 高度
  height_sb: getStatusBarHeight(), // status bar 高度
  height_nav: 52*rem, //底部主导航高度
  
  fs_tab: 16 * rem, // tab默认字体大小
  fs_title: 16 * rem, // 标题字体大小
  fs_body: 14 * rem, // 正文字体大小
  fs_assist: 12 * rem, // 辅助说明字体大小
  
  ifs_header: 24 * rem,
  ifs_title: 18 * rem, // 标题字体大小
  ifs_tab: 16 * rem, // 标题字体大小
  ifs_body: 14 * rem, // 正文字体大小
  ifs_assist: 12 * rem, // 辅助说明字体大小
  
  fs_article: 18*rem, //文章正文字体大小
  fs_table: 14*rem, //文章表格字体大小
  fs_feedbody: 15*rem, //讨论等feed流常规字体大小
  
  space_l: 20 * rem,
  space: 15 * rem,
  space_s: 10 * rem,
  space_sp: 8 * rem, // 间隔大小
  
  size_avatar: 36 * rem, // feed流等处通用的头像大小
  
  density: density,
  PX: 1 / density,
  REM: rem,
}

export default adapter