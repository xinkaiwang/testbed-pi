'use strict';

require('./setup');
var gs = require('global-singleton');

var pwm = gs('allWheels');

var stepCount = 100; // how much step is 1 loop?
var stepDelay = 20; // 10ms
var counter = 0;

var isExiting = false;
function onTimeout() {
    counter ++;
    counter = counter % stepCount;
    var value = Math.sin(Math.PI * 2 * counter / stepCount);
    if (!isExiting) {
        pwm(value); // range [-1, 1]
        setTimeout(onTimeout, stepDelay);
    }
}

onTimeout();

process.on('SIGINT', function() {
    console.log("Caught interrupt signal, stopping...");
    pwm(0);
    isExiting = true;
    setTimeout(process.exit, 100);
});
