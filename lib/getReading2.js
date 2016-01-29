'use strict';

require('./setup');
var gs = require('global-singleton');

gs('sensor.center')().then(function(val) { console.log('center='+val); });
gs('sensor.edge')().then(function(val) { console.log('edge='+val); });
gs('sensor.ref')().then(function(val) { console.log('ref='+val); });
