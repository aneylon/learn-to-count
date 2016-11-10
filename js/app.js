console.log('test')
var pickedLang = function(){
  console.log('picked')
}

var selected = function(value){
  if ( value === '日本語')
    console.log(japanese)
  else
    console.log(value)
}

var makeNumber = function(length){
  var output = String(pickRandom(9,1))
  while(length > 1){
    output += pickRandom(9)
    length--
  }
  return output
}

var pickRandom = function(max, min){
  max = max || 2
  min = min || 0
  return Math.floor(Math.random() * (max - min + 1) + min)
}
