'use strict';

var Promise = require('bluebird');
var getReading = Promise.promisify(require('./dev/thermo').getReading);

getReading('t1').then(console.log);