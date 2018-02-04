function theBeatlesPlay (musician, instruments) {
  var array = [];  
  var strings = array;
  for (var i = 0; i < musician.length; i++) {
    array[i] = (musician[i] + " plays " + instruments[i]);
  }
   return array;
}

function johnLennonFacts (jlArray) {
   var i = 0;
   //console.log(jlArray.length);
   while (i < jlArray.length) {
    jlArray[i] = (jlArray[i] + "!!!");
    i++;
    }
   return jlArray;
  }