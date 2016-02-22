'use strict';

require('./setup');

var gs = require('global-singleton');

var allWheels = gs('allWheels');
var allLeft = gs('allLeft');
var allRight = gs('allRight');

var stepCount = 100; // how much step is 1 loop?
var stepDelay = 20; // 10ms
var counter = 0;

process.on('SIGINT', function() {
    console.log("Caught interrupt signal, stopping...");
    allWheels(0);
    setTimeout(process.exit, 100);
});

function onButton(data) {

}

var MAX = 32768;
function onAxis(data) {
    if (data.number === 1) {
        var val = - data.value/MAX;
        allLeft(val);
    } else if (data.number === 3) {
        var val = - data.value/MAX;
        allRight(val);
    }
}

// Set a deadzone of +/-3500 (out of +/-32k) and a sensitivty of 350 to reduce signal noise in joystick axis 
var joystick = new (require('joystick'))(1, 3500, 350);
joystick.on('button', onButton);
joystick.on('axis', onAxis);

