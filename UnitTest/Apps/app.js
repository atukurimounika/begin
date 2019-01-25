module.exports={

    validation:function(...args){
    throw args;
    },
    operations:function(op,...arr){
      var result;
      switch (op) {
        case '+':{
          result=0;
          for(let i in arr){
            result+=arr[i];
          }
          break;
        }

        case '-':{
          result=0;
          for(let i in arr){
            result-=arr[i];
          }
          break;
        }

        case '*':{
          result=1;
          for(let i in arr){
            result*=arr[i];
          }
          break;
        }

        default: result = 'try again';
      }
      return result;
    }
}
