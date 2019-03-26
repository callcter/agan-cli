#!/usr/bin/env node

const shell = require('shelljs')
const program = require('commander')
const chalk = require('chalk')
const ora = require('ora')
const { copyFile, copyTempFiles, createPackageJson } = require('./utils')

program
  .version("0.0.1", '-v, --version', '组件版本')

program.on('--help', () => {})

program
  .command('init')
  .action(() => {
    createPackageJson()
    let spinner = ora('NPM Installing...').start()
    try {
      shell.exec('npm install', {silent: false, async: false})
      // shell.exec('react-native link', {silent: false, async: false})
    } catch(err) {
      console.log(chalk.red(err))
      process.exit(1)
    }
    spinner.stop()
    copyTempFiles()
  })

program
  .command('generate <name>')
  .alias('g')
  .description('生成模板文件')
  .option('-t --type <type>', '文件类型', /^(render|action|reducer)$/i, 'render')
  .action((name, option)=>{
    copyFile(name, option.type)
  })

program
  .command('git <commit>')
  .description('git 提交')
  .action((commit)=>{
    shell.exec('git add .')
    shell.exec(`git commit -a -m '${commit}'`)
    shell.exec('git pull')
    shell.exec('git push')
  })

program.parse(process.argv)