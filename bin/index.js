exports.rand = function(cnt) {
  let charBox = 'abcdefghijklmnopqrstuvwxyz1234567890' 
  let ranString = ''

  for (let i=0; i<cnt; i++) {
    let cRand = Math.floor(Math.random() * charBox.length)

    if (ranString != '') {
      ranString = ranString + charBox[cRand]
    } else {
      ranString = charBox[cRand]
    }
  }

  return ranString
}