'use strict';

var Promise = require('bluebird');
var getReading = Promise.promisify(require('./dev/thermo').getReading);
var gs = require('global-singleton');

gs('thermo.center', function() {return function() {return getReading('t1'); } });
gs('thermo.edge', function() {return function() {return getReading('t2'); } });
gs('thermo.ref', function() {return function() {return getReading('t5'); } });

//gs('sensor.ref', function() {return function() { return Promise.resolve(10); } });
