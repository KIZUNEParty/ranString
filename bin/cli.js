#!/usr/bin/env node
let yargs = require('yargs/yargs')
let rand = require('./index')

let argv = yargs(process.argv.slice(2))
  .help().argv;


let count = ''

if (argv._[0] != undefined) {
  count = parseInt(argv._[0])
} else {
  count = 10
}

console.log(rand.rand(count));