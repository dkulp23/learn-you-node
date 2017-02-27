'use strict';

// const params = process.argv.reduce(function(acc, ele, index) {
// 	if (index > 1) {
// 		return acc + Number(ele);
// 	} else {
// 		return 0;
// 	}
// }, 0);

// console.log(params);

// const fs = require('fs');

// const file = fs.readFileSync(process.argv[2], 'utf-8');

// function parseFile(str) {
// 	let parsedBuff = str.split('\n');
// 	let number = parsedBuff.length - 1;
// 	console.log(number);
// };

// parseFile(file);

// fs.readFile(process.argv[2], 'utf-8', function(err, data) {
// 	if (err) console.error(err);
// 	console.log(data.split('\n').length - 1);
// });

// const path = require('path');

// fs.readdir(process.argv[2], function(err, list) {
// 	if (err) console.error(err);
// 	list.forEach(function(ele) {
// 		if (path.extname(ele) == `.${process.argv[3]}`) {
// 			console.log(ele);
// 		}
// 	});
// });

const filterExt = require('./module.js');

filterExt(process.argv[2], process.argv[3], function(err, data) {
	if (err) console.error(err);
	data.forEach(function(ele) {
		console.log(ele);
	});
});