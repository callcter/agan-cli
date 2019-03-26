const isDev = true // 判断 api 地址
const isRelease = false // 判断发布状态，发布时要修改这里为 true

export const ReportApiPath = isDev ? 'https://xxx-staging.xxx.com/report' : 'https://xxx.xxx.com/report'