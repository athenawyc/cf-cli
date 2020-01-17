const fs = require('fs-extra');
const { tempaltePath } = require('../kit/files');

const replateStr = function (fileName, buffer) {
  let val = buffer;
  val = val.replace(/\<\%fileName\%\>/g, fileName);
  return val;
}

const createAntModle = function (curPath, fileName) {
  const targetJsPath = [
    curPath,
    fileName + '.js',
  ].join('\\');

  const temPath = tempaltePath();
  const antModelTemplate = fs.readFileSync(`${temPath}\\antModel.txt`, 'utf-8');
  const antModelTemplateRelust = replateStr(fileName, antModelTemplate);
  try {
    fs.outputFileSync(targetJsPath, antModelTemplateRelust);
    console.log('Create Ant Model Success!');
  }
  catch (e) {
    console.log(e);
  }
}

module.exports = {
  createAntModle,
}