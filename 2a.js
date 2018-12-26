var obj={

  _setVersion:function(versionName){
    this._version=versionName;
  },
  _setChannel: function(channelName){
    this._channel=channelName;
  },
  _setKeyFeild:function(feildName){
    this._keyFeild=feildName;
  },

  getVesion: function()
  {
    console.log(this._version);
  },
  getChannel: function()
  {
    console.log(this._channel);
  },
  getKeyFeild: function()
  {
    console.log(this._keyFeild);
  }
}
obj._setVersion('3.2');
obj._setKeyFeild(36);
obj.getKeyFeild();

var newObj= [{'channel': 'A'}, {'channel': 'B'}, {'channel':'C'}];

obj.getKeyFeild.prototype.arrMethod =function(newObj){
  var arr=[];
  for(var i in newObj){
    arr.push(newObj[i].channel);
  }
  console.log(arr);
}
obj.getKeyFeild.prototype.arrMethod(newObj);
