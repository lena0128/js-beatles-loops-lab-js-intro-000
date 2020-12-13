// add solution here
var musicians = [];
var instruments = [];

function theBeatlesPlay(musicians, instruments) {
 var myList = [];
  for(let i = 0; i < musicians.length; i++) {
    var newArray = `${musicians[i]} plays ${instruments[i]}`;
    myList.push(newArray[i]);
  }
  return myList;
}
