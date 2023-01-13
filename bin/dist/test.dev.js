"use strict";

var charTemp = "abcdefghijklmnopqrstuvwxyz1234567890";
var charBox = Array.from(charTemp);
var ranString = '';

for (var i = 0; i < cnt; i++) {
  var cRand = Math.floor(Math.random() * charBox.length);

  if (ranString != '') {
    ranString = "".concat(ranString).concat(charBox[cRand]);
  } else {
    ranString = charBox[cRand];
  }
}

console.log(ranString);