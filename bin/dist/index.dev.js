"use strict";

exports.rand = function (cnt) {
  var charBox = 'abcdefghijklmnopqrstuvwxyz1234567890';
  var ranString = '';

  for (var i = 0; i < cnt; i++) {
    var cRand = Math.floor(Math.random() * charBox.length);

    if (ranString != '') {
      ranString = ranString + charBox[cRand];
    } else {
      ranString = charBox[cRand];
    }
  }

  return ranString;
};