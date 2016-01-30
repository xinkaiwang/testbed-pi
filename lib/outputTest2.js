'use strict';

require('./setup');
var gs = require('global-singleton');

var led = gs('output.led');

var softPwm = require('./softPwm')(led, {cycleTimeInSeconds:1});

softPwm(0.01);
