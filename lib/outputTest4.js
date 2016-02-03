'use strict';

require('./setup');

var gs = require('global-singleton');
var pwm = gs('output.motor1');

var stepCount = 100; // how much step is 1 loop?
var loopTimeInMs = 5*1000; // 60 seconds
var counter = 0;

function onTimeout() {
    counter ++;
    counter = counter % stepCount;
    var value = Math.sin(Math.PI * 2 * counter / stepCount - Math.PI / 2);
    console.log('value=' + value + ' delay=' + loopTimeInMs/stepCount);
    pwm(value);
    //pwm(0.1);
    setTimeout(onTimeout, loopTimeInMs/stepCount);
}

onTimeout();
