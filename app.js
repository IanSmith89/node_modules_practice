// This is where you should incorporate your modules and execute your app

var autoRespond = require('./autoResponse');
var dateFormat = require('dateformat');
var fs = require('fs');

// console.log(autoRespond.getResponse('Wednesday'));
// console.log(autoRespond.getResponse('Saturday'));

function printTodayMessage() {
  var now = new Date();
  var day = dateFormat(now, 'dddd');
  var data = autoRespond.getResponse(day);
  fs.appendFile('autoResponse.txt', data + '\n', function(err) {
    if (err) {
      throw err;
    }
    console.log('The day message was appended to file!');
  });
}

printTodayMessage();
