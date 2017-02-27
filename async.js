'use strict';

const http = require('http');

const urls = process.argv.reduce(function(acc, ele, index) {
  if (index > 1) acc.push(ele);
  console.log(ele);
  return acc;
}, []);

const asyncCall = function(url, callback) {
  let result = [];

  http.get(url[0], function(res) {
    let string = '';
    res.on('data', function(data) {
      string += data.toString();
    });
    res.on('end', function() {
      result.push(string);
    });
    res.on('error', function(err) {
      if (err) callback(err, null);
    });
    http.get(url[1], function(res) {
      let secondString = '';
      res.on('data', function(data) {
        secondString += data.toString();
      });
      res.on('end', function() {
        result.push(secondString);
      });
      res.on('error', function(err) {
        if (err) callback(err, null);
      });
      http.get(url[3], function(res) {
        let thirdString = '';
        res.on('data', function(data) {
          thirdString += data.toString();
        });
        res.on('end', function() {
          result.push(thirdString);
          callback(null, result);
        });
        res.on('error', function(err) {
          if (err) callback(err, null);
        });
      });
    });
  });
};

asyncCall(urls, function(err, results) {
  if (err) console.error(err);
  results.forEach(function(ele) {
    console.log(ele);
  });
});
