const fs = require('fs')

const rs = fs.createReadStream('iconfont.txt')
rs.setEncoding('utf8')
rs.on('data', function(chunk){
  let reg = /\.icon-[0-9|a-z|A-Z|-]+\:[\s\S]{16,18}\"\\[0-9|a-z]+\"\;/g
  let arr = chunk.match(reg)
  let result = {}
  for(let i=0;i<arr.length;i++){
    let reg1 = /\.icon-[0-9|a-z|A-Z|-]+\:/g
    let reg2 = /\"\\[0-9|a-z]+\"\;/g
    let str1 = arr[i].match(reg1)[0]
    let str2 = arr[i].match(reg2)[0]
    let str11 = str1.replace(/\.icon-/, '').replace(/\:/, '')
    let str22 = str2.replace(/[\"]/, '').replace(/\\/, '').replace(/\"\;/, '')
    result[str11] = parseInt(str22, 16)
  }
  fs.writeFileSync('iconfont.json', JSON.stringify(result, null, 2), 'utf8')
})