const tempaltePath = function () {
  const curPath = __dirname.split('\\');
  const templatePath = [];
  for (let i = 0; i < curPath.length - 1; i++) {
    templatePath[i] = curPath[i];
  }
  return [...templatePath, 'componentsTemplate', 'js'].join('\\');
}

module.exports = {
  tempaltePath,
}