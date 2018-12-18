var obj={

  _version:function(versionName){
    this._version=versionName;
  },
  _channel: function(channelName){
    this._channel=channelName;
  },
  _keyFeild:function(feildName){
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
obj._version('3.2');
obj._keyFeild(36);
obj.getKeyFeild();

var newObj= [{'channel': 'A'}, {'channel': 'B'}, {'channel':'C'}];

obj.getKeyFeild.prototype.arrMethod =function(newObj){
  var arr=[];
  for(i in newObj){
    arr.push(newObj[i].channel);
  }
  console.log(arr);
}
obj.getKeyFeild.prototype.arrMethod(newObj);
