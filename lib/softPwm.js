'use strict';


function createDevice(underlyingDev, opts) {
    opts = opts || {};
    var cycleTimeInSeconds = opts.cycleTimeInSeconds || 2; // default 2 seconds for 1 cycle (on/off)

    var timeoutObject;

    function startCycle(value) {
        var switchOnTimeIsMs = Math.round((cycleTimeInSeconds * 1000) * value);
        var switchOffTimeInMs = cycleTimeInSeconds * 1000 - switchOnTimeIsMs;
        underlyingDev(1);
        timeoutObject = setTimeout(swithOnTimeout, switchOnTimeIsMs);
        //console.log('switchOnTimeIsMs=' + switchOnTimeIsMs + ' switchOffTimeInMs=' + switchOffTimeInMs);
        function swithOnTimeout() {
            underlyingDev(0);
            timeoutObject = setTimeout(switchOffTimeout, switchOffTimeInMs);
        }
        function switchOffTimeout() {
            underlyingDev(1);
            timeoutObject = setTimeout(swithOnTimeout, switchOnTimeIsMs);
        }
    }

    function setValue(value) {
        if(timeoutObject) {
            clearTimeout(timeoutObject);
        }
        startCycle(value);
    }

    return setValue;
}

module.exports = createDevice;