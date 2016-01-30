'use strict';

require('./setup');
var gs = require('global-singleton');

var pwm = require('./softPwm')(gs('output.led'), {cycleTimeInSeconds:1});

var stepCount = 60; // how much step is 1 loop?
var loopTimeInMs = 60*1000; // 60 seconds
var counter = 0;

function onTimeout() {
    counter ++;
    counter = counter % stepCount;
    var value = Math.sin(Math.PI * 2 * counter / stepCount - Math.PI / 2);
    value = (value + 1.0) / 2;
    console.log('value=' + value + ' delay=' + loopTimeInMs/stepCount);
    pwm(value);
    //pwm(0.1);
    setTimeout(onTimeout, loopTimeInMs/stepCount);
}

onTimeout();
