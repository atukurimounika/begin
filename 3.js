function GroupObjectsBy(obj) {
  var result = {};
  for (var x in obj) {
    var currentChannel = obj[x].channel;
    for (var y in obj) {
      if (currentChannel === obj[y].channel) {
        if (!result.hasOwnProperty(currentChannel)) {
          result[currentChannel] = [];
          result[currentChannel].push(obj[y]);
        } else {
          if (result[currentChannel].indexOf(obj[y]) == -1)
            result[currentChannel].push(obj[y]);
        }
      }
    }
  }
  console.log(result);;
}

var jsnObj=[
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

];
GroupObjectsBy(jsnObj);
