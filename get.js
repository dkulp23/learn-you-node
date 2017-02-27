'use strict';

const http = require('http');

const urls = process.argv.reduce(function(acc, ele, index) {
	if (index > 1) {
		acc.push(ele);
	}
	return acc;
}, []);

const syncCall = function(arr, callback) {
	let results = [];

	arr.forEach(function(ele, index, array) {
		http.get(ele, function(res) {
			let concat = '';
			res.on('data', function(data) {
				concat += data.toString();
			});
			res.on('end', function() {
				results.push(concat);
				callback(null, results);
			});
			res.on('error', function(err) {
				callback(err, null);
			});
		});
	});	
};

syncCall(urls, function(err, stuff) {
	if (err) console.error(err);
	console.log(stuff);
});
// http.get(process.argv[2], function(res) {
// 	let concat = '';
// 	res.setEncoding('utf-8');
// 	res.on('data', function(data) {
// 		concat += data;
// 	});
// 	res.on('end', function() {
// 		console.log(concat.length);
// 		console.log(concat);
// 	});
// 	res.on('error', function(err) {
// 		console.error(err);
// 	});
// });