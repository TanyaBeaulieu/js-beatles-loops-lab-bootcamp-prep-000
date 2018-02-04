function theBeatlesPlay (musician, instruments) {
  var array = [];  
  var strings = array;
  for (var i = 0; i < musician.length; i++) {
    array[i] = (musician[i] + " plays " + instruments[i]);
  }
   return array;
}

function johnLennonFacts (jlArray) {
   var j = jlArray.length
   while (j > 0) {
    jlArray[j] = (jlArray[j] + "!!!");
    j = j--;
    }
   return jlArray;
  }