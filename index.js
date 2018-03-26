var express = require('express')
const axios = require('axios');
var app = express();
var Q = require("q");
var moment = require("moment");

app.set('view engine', 'ejs');
app.use(express.static('static'));
// TODO: Text Shadow wenn man draufgeht + Anzeige bis welche Ferien + AUswählen Bundesland + Search how header doesnt move the clock downwards
app.get('/', function (req, res) {
  getTime().then(function (result) {
    var index = compareTime(result);
    res.render('home', {
      time: result.data.daten[index].beginn
    });
  });
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})
function getTime() {
  def = Q.defer();
  axios.get("http://api.smartnoob.de/ferien/v1/ferien", {
      params: {
        bundesland: "he",
        jahr: (new Date()).getFullYear()
      }
    })
    .then(function (response) {
      def.resolve(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return def.promise;
}

// Compares the times between the starts of the holidaydates
function compareTime(json) {
  var arr = [];
  var data = json.data.daten;
  for (var i in data) {
    var start = moment.unix(data[i].beginn);
    var now = moment();
    var days = start.diff(now, "m")
    arr.push(days);
  }
  var ind = getLowestArrNum(arr);
  console.log(arr);
  return ind;
}

function getLowestArrNum(arr) {
  var index = 0;
  var value = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if(value < 0){
      value = arr[i];
      index = i;
    } else if (arr[i] < value) {
      value = arr[i];
      index = i;
    }
  }
  return index;
}
