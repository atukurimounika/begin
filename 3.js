function GroupObjectsBy(jsonObj){
  var i,constant=-1,newObj='{';
  for(var i=0;i<jsonObj.Tv.length;i++){
    var j=i;
    if (i===constant) continue;
    var temp = jsonObj.Tv[j].channel;
    newObj+=JSON.stringify(temp)+':[';
    while(jsonObj.Tv[j].channel===temp){
    constant=j;
    newObj+=JSON.stringify(jsonObj.Tv[j])+',';
    if(j===jsonObj.Tv.length-1) break;
    else j++;
    }
    newObj = newObj.substring(0, newObj.length - 1);
    newObj+='],';
  }
  newObj = newObj.substring(0, newObj.length - 1);
  newObj+='}';
  var jsonNewObj= JSON.parse(newObj);
  console.log(jsonNewObj);
};

var jsnObj={
  'Tv':[
  {
    "channel": "A",
    "name": "shoe"
  },
  {
    "channel": "A",
    "name": "electronics"
  },
  {
    "channel": "B",
    "name": "apparel"
  },
  {
    "channel": "C",
    "name": "electronics"
  }

]};
GroupObjectsBy(jsnObj);
