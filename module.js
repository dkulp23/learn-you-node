'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function(dirname, extension, callback) {
	fs.readdir(dirname, function(err, data) {
		if (err) return callback(err, null);
		let result = [];
		data.forEach(function(ele) {
			if (path.extname(ele) == `.${extension}`) {
				result.push(ele);
			}
		});
		/*list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })*/
		callback(null, result);
	});
};