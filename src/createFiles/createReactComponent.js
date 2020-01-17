const fs = require('fs-extra');
const { tempaltePath } = require('../kit/files');
const { pascalFormat } = require('../kit/utils');

const replateStr = function (fileName, buffer) {
  let val = buffer;
  val = val.replace(/\<\%fileName\%\>/g, pascalFormat(fileName));
  val = val.replace(/\<\%cssFileName\%\>/g, fileName);
  return val;
}

const createReactComponent = function (curPath, fileName) {
  const pascalName = pascalFormat(fileName);
  const targetJsPath = [
    curPath,
    pascalName,
    'index.js',
  ].join('\\');
  const targetLessPath = [
    curPath,
    pascalName,
    'index.less',
  ].join('\\');

  const temPath = tempaltePath();
  const reactTemplate = fs.readFileSync(`${temPath}\\reactTemplate.txt`, 'utf-8');
  const reactTemplateRelust = replateStr(fileName, reactTemplate);
  try {
    fs.outputFileSync(targetJsPath, reactTemplateRelust);
    fs.outputFileSync(targetLessPath,`.${fileName}Wrap {}`);
    console.log('Create React Component Success!');
  } 
  catch (e) {
    console.log(e);
  }
}

module.exports = {
  createReactComponent,
}