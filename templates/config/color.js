import { processColor } from 'react-native'

const Color = {
  gradient_orange: ['#ffad01', '#ff4810'],
  gradient_purple: ['#93b4fc', '#8083ff'],
  white: '#fff', // 纯白色
  white_rgb: '255,255,255',
  white_light: 'rgba(255,255,255,0.7)',
  white_lighter: 'rgba(255,255,255,0.3)',
  black: '#000', // 纯黑色
  black_rgb: '0,0,0',
  red: '#FA3552', // 红色、主色
  blue: '#377df6', // 蓝色
  orange: '#ff6600', // 橙色
  yellow: '#fbea79', //亮黄色
  green: '#009a61', // 绿色
  purple: '#6100FF', // 紫色
  brown: '#d76c32', //棕色
  f_title: '#222222', // f=font，标题色，一级黑色
  f_body: '#666666', // 正文色，二级黑色
  f_assist: '#999999', // 辅助性文字色，三级黑色
  f_placeholder: '#999999', // 占位色
  //f_special: '#A48E6B', // 特殊文字
  line: '#EEEEEE', //分割线颜色
  l_high: '#EEEEEE', // l=line，分割线深色
  l_light: '#EEEEEE', // 分割线浅色
  b_main: '#F5F5F5', // b=back，主背景色
  b_high: '#FCFCFC', // 高亮背景色
  b_disable: '#bbb', // 未激活按钮色，配合占位色
  b_lightorange: 'rgba(255,102,0,0.1)',
  b_lightblue: '#f0f6ff', // 浅蓝色背景
  b_lightred: '#fceaeb', // 浅红色背景
  b_lightgreen: '#d8f3e9', //浅绿色
  b_lightyellow: '#FFFBE7', //浅黄色，提醒背景
  b_verylightred: '#fffafa', //淡红色背景
  b_special: '#5b7283', // 特殊色块背景
  b_gray: '#a7a7a7',
  b_blue: '#88C1FC',
  theme: '#377df6', //6.30日新增，主题色调
  b_header: '#fcfcfd',  //顶部栏默认颜色
  first: '#fd6761', //排名第一的颜色
  second: '#fd8b62', //排名第二的颜色
  third: '#feb17a', //排名第三的颜色
  goodOrgs: '#fc883f', //好公司卡片背景色
  lowValue: '#fcfdff', //低估值企业卡片背景色
  f_goodOrgs: '#fdd4bc', //好公司卡片浅白字色
  colors: ['#ff625d','#4bb9f4', '#f5ce4a', '#6ecc51', '#d28ae2','#5dffc1',  '#6568ce', '#a88463','#4e4056', '#d3d3d3'],
  pColors: [processColor('#ff625d'),processColor('#4bb9f4'),processColor('#f5ce4a'),processColor('#6ecc51'),processColor('#d28ae2'),processColor('#5dffc1'),processColor('#6568ce'),processColor('#a88463'),processColor('#4e4056'),processColor('#d3d3d3')]
}

export default Color
