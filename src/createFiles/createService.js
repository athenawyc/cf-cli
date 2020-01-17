const fs = require('fs-extra');
const { tempaltePath } = require('../kit/files');
const { pascalFormat } = require('../kit/utils');

const replateStr = function (fileName, buffer) {
  let val = buffer;
  val = val.replace(/\<\%fileName\%\>/g, fileName);
  return val;
}

const createAntService = function (curPath, fileName) {
  const targetJsPath = [
    curPath,
    fileName + '.js',
  ].join('\\');

  const temPath = tempaltePath();
  const antServiceTemplate = fs.readFileSync(`${temPath}\\antService.txt`, 'utf-8');
  const antServiceTemplateRelust = replateStr(pascalFormat(fileName), antServiceTemplate);

  try {
    fs.outputFileSync(targetJsPath, antServiceTemplateRelust);
    console.log('Create Ant service Success!');
  }
  catch (e) {
    console.log(e);
  }
}

module.exports = {
  createAntService,
}