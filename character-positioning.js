function letterPositioner(string){
  var uniqueChar = string.split('');
  var uniqueCharObj = {};
  for(var i = 0; i < uniqueChar.length; i++){
    var temp = {};
    for(var j = 0; j < uniqueChar.length; j++){
      if (uniqueChar[i] === uniqueChar[j]){
        temp['char'] = uniqueChar[i];
        temp['index'] = i;
      }
    }
    if(uniqueChar[i] !== ' '){
      uniqueCharObj[uniqueChar[i]] = temp;
    }
  }
  console.log(uniqueCharObj);
}

letterPositioner('lighthouse in the house');