var readline = require('readline-sync');

function sortArray(arr){
  var originalArray = arr;
  function sortArray(){
    var sortedArray;
    if(arr.id !==undefined){
      sortedArray= arr.sort(function(a, b){
    return a.id - b.id;
    })

    } else sortedArray = originalArray.sort();
    function getSortedArray(){
      return sortedArray;
    }
    return getSortedArray;
  }
  return sortArray;
}

function newSortJsonObj(jsonObj){

  sortArray.apply(jsonObj);
}



function inputValues(){
  var inputStr= readline.question("Enter the array:");
  var arr=JSON.parse("[" + inputStr + "]");
  console.log(sortArray(arr)()());
}

inputValues();
