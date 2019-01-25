const chai = require('chai');
const app = require('../Apps/app');

describe('---Calculator---',function(){
  describe('#validation',function(){
    it('All numbers must be integers', function(){
      try{
          chai.assert.typeOf(app.validation(2,3,4),'function')
      }
      catch (args){
        args.forEach(function(va,ind){
        chai.assert.typeOf(va,'number','is a numbers')
        });
      }
    });
  });
  describe('#operations',function(){
    it('the return must be integer',function(){
      var result=chai.assert.typeOf(app.operations('+',2,3,4),'number');
    });
  });
});
