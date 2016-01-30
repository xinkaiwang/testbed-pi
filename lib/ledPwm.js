'use strict';

var piblaster = require('pi-blaster.js');

// outputLevel(17, 1);
// 0.0 <= level <= 1.0
function outputLevel(gpioPinNm, level) {
    level = Math.max(level, 0.0);
    level = Math.min(level, 1.0);
    console.log('outputLevel=' + level);
    piblaster.setPwm(gpioPinNm, level);
}

module.exports = {
    outputLevel: outputLevel
};
