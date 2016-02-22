'use strict';

var sb = require('servo-blaster.js');
var _ = require('underscore');

// pin1/pin2 are P1-PIN number for instance: 11 = P1-11 = GPIO17
// val in range (-1, 1)
function createWheel(pin1, pin2) {
    function wheel(val) {
        sb.setP1Pwm(pin1, val >= 0 ? val : 0);
        sb.setP1Pwm(pin2, val <= 0 ? -val : 0);
    }
    return wheel;
}

var wheels = {
    wheel1: createWheel(13, 15),
    wheel2: createWheel(18, 16),
    wheel3: createWheel(31, 29),
    wheel4: createWheel(33, 35)
}

function createComposed(out1, out2) {
    function output(val) {
        out1(val);
        out2(val);
    }
    return output;
}

var aliases = {
    frontLeft: wheels.wheel1,
    frontRight: wheels.wheel2,
    rearRight: wheels.wheel3,
    rearLeft: wheels.wheel4
}
aliases.allFront = createComposed(aliases.frontLeft, aliases.frontRight);
aliases.allRear = createComposed(aliases.rearLeft, aliases.rearRight);
aliases.allLeft = createComposed(aliases.frontLeft, aliases.rearLeft);
aliases.allRight = createComposed(aliases.frontRight, aliases.rearRight);
aliases.allWheels = createComposed(aliases.allFront, aliases.allRear);

module.exports = _.extend(wheels, aliases);
