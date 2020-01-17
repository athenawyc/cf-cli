#!/usr/bin/env node
const curPath = process.cwd();
const argv = process.argv.slice(2);
const { createReactComponent } = require('../src/createFiles/createReactComponent');
const { createAntModle } = require('../src/createFiles/createAntModle');
const { createAntService } = require('../src/createFiles/createService');
const { parseArgv } = require('../src/kit/utils');
const { helpInfo } = require('../src/kit/help');

const { crc, cmf, csf, help, h } = parseArgv(argv);


if (!argv.length || h || help) {
  helpInfo();
}

if (crc) {
  createReactComponent(curPath, crc);
}

if (cmf) {
  createAntModle(curPath, cmf);
}

if (csf) {
  createAntService(curPath, csf);
}
