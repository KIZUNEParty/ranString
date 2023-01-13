#!/usr/bin/env node
"use strict";

var yargs = require('yargs/yargs');

var rand = require('./index');

var argv = yargs(process.argv.slice(2)).help().argv;
var count = '';

if (argv._[0] != undefined) {
  count = parseInt(argv._[0]);
} else {
  count = 10;
}

console.log(rand.rand(count));