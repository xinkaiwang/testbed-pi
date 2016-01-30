'use strict';

require('./setup');
var gs = require('global-singleton');

var pwm = gs('output.led');

var stepCount = 100; // how much step is 1 loop?
var stepDelay = 20; // 10ms
var counter = 0;

function onTimeout() {
    counter ++;
    counter = counter % stepCount;
    var value = Math.sin(Math.PI * 2 * counter / stepCount);
    pwm((value + 1.0)/2);
    setTimeout(onTimeout, stepDelay);
}

onTimeout();
