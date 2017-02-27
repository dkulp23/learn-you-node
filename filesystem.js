'use strict';

const fs = require('fs');

function parseFile(buffer) {
	let parsedBuff = buffer.toString().split('/n');
	let number = parsedBuff.length - 1
	console.log(number)
};

parseFile(fs.readFileSync(process.argv[2]));
