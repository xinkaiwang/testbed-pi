'use strict';

var Promise = require('bluebird');
var _ = require('underscore');
var getReading = Promise.promisify(require('./dev/thermo').getReading);
var gs = require('global-singleton');
var ledPwm = require('./ledPwm');

gs('thermo.center', function() {return _.bind(getReading, null, ['t1']); });
gs('thermo.edge', function() {return _.bind(getReading, null, ['t2']); });
gs('thermo.ref', function() {return _.bind(getReading, null, ['t5']); });

//gs('sensor.ref', function() {return function() { return Promise.resolve(10); } });

gs('output.led', function() {return _.bind(ledPwm.outputLevel, null, [17]); });
