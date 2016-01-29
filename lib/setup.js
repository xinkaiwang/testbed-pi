'use strict';

var Promise = require('bluebird');
var getReading = Promise.promisify(require('./dev/thermo').getReading);
var gs = require('global-singleton');

gs('sensor.center', function() {return function() {return getReading('t1'); } });
gs('sensor.edge', function() {return function() {return getReading('t2'); } });
gs('sensor.ref', function() {return function() {return getReading('t5'); } });
