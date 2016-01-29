'use strict';

require('./setup');
var gs = require('global-singleton');

gs('thermo.center')().then(function(val) { console.log('center='+val); });
gs('thermo.edge')().then(function(val) { console.log('edge='+val); });
gs('thermo.ref')().then(function(val) { console.log('ref='+val); });
