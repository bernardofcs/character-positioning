function letterPositioner(string){
  var uniqueChar = string.split('');
  var uniqueCharObj = {};
  for(var i = 0; i < uniqueChar.length; i++){
    var temp = new Object();
    temp['index'] = [];
    for(var j = 0; j < uniqueChar.length; j++){
      if (uniqueChar[i] === uniqueChar[j]){
        temp['index'].push(j);
      }
    }
    if(uniqueChar[i] !== ' '){
      uniqueCharObj[uniqueChar[i]] = temp;
    }
  }
  console.log(uniqueCharObj);
}

letterPositioner('lighthouse in the house');