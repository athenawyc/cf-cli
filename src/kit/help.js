const chalk = require('chalk');
const { log } = console;
const SPACE = ' ';

const helpInfo = function () {
  log(`${chalk.green('--help 或 -h')} ${SPACE} 帮助信息`);
  log(`${chalk.green('--crc <filename>')} ${chalk.blue('create react component')} ${SPACE} 创建一个React组件`);
  log(`${chalk.green('--cmf <filename>')} ${chalk.blue('create model file')} ${SPACE} 创建一个ant数据模型文件`);
  log(`${chalk.green('--csf <filename>')} ${chalk.blue('create service file')} ${SPACE} 创建一个ant服务模型文件`);
};

module.exports = {
  helpInfo,
};