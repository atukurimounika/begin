var readline = require('readline-sync');
var bool = false;
console.log("Enter two complex numbers");

var obJComplex ={

  realOne: function(){
      this.realOne=parseInt(readline.question('Real part of first number:'));
  },
  imgOne: function(){
    this.imgOne=parseInt(readline.question('img part of first number:'));
  },
  realTwo: function(){
    this.realTwo=parseInt(readline.question('Real part of second number:'));
  },
  imgTwo: function(){
    this.imgTwo=parseInt(readline.question('img part of second number:'));
  }
}

function operations(){
  obJComplex.realOne();
  obJComplex.imgOne();
  obJComplex.realTwo();
  obJComplex.imgTwo();
  console.log('Selct any operation below:' + '\n' + '1.Addition' + '\n' +'2.Subtaction' + '\n' +'3.Multiplication');
  manipulation();
}
operations.prototype.addMethod= function(){
    return ((obJComplex.realOne + obJComplex.realTwo) + "+" + (obJComplex.imgOne + obJComplex.imgTwo) + "i");
}
operations.prototype.subMethod= function(){
    return ((obJComplex.realOne - obJComplex.realTwo) + "+" + (obJComplex.imgOne - obJComplex.imgTwo) + "i");
}
operations.prototype.mulMethod = function(){
  return ((obJComplex.realOne * obJComplex.realTwo) - (obJComplex.imgOne * obJComplex.imgTwo) + "+" + ((obJComplex.realOne * obJComplex.imgTwo) + (obJComplex.realTwo * obJComplex.imgOne)) + "i");
}

function manipulation(){
  while (bool === false) {
    var op = parseInt(readline.question("Enter the number before to choose the specific operation:"));
    function resultValue() {
      switch (op) {
      case 1:
      bool = true;
      return operations.prototype.addMethod();
      break;

      case 2:
      bool = true;
      return operations.prototype.subMethod();
      break;

      case 3:
      bool = true;
      return operations.prototype.mulMethod();
      break;

      default:
      {
      bool = false;
      return "Enter above mentioned operations!";
      }
      }
    }
    console.log(resultValue());
  }
}


operations();
