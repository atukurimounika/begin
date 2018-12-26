var readline = require('readline-sync');

function sortArray(arr){
  var originalArray = arr;
  function sortArray(){
    var sortedArray;
    sortedArray = originalArray.sort();
    function getSortedArray(){
      return sortedArray;
    }
    return getSortedArray;
  }
  return sortArray;
}

// function newSortJsonObj(jsonObj){
//
//   console.log(sortArray.apply(jsonObj)()());
// }
//
// var jsnObj={"id":[5,4,3,2,1]};
// newSortJsonObj(jsnObj);


function inputValues(){
  var inputStr= readline.question("Enter the array:");
  var arr=JSON.parse("[" + inputStr + "]");
  console.log(sortArray(arr)()());
}

inputValues();
