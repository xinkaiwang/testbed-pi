'use strict';

var piblaster = require('pi-blaster.js');

function createOutput(gpioPinNmA, gpioPinNmB) {
    // -1.0 <= level <= 1.0
    function outputLevel(level) {
        level = Math.max(level, -1.0);
        level = Math.min(level, 1.0);
        console.log('outputLevel=' + level);
        if (level >= 0) {
            piblaster.setPwm(gpioPinNmA, level);
            piblaster.setPwm(gpioPinNmB, 0);
        } else {
            piblaster.setPwm(gpioPinNmA, 0);
            piblaster.setPwm(gpioPinNmB, -level);
        }
    }
    return outputLevel;
}

module.exports = createOutput;
