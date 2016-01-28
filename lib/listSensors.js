'use strict';

var Promise = require('bluebird');
var ds18b20 = require('ds18b20');
var _ = require('underscore');


function cb(err, value) {
    console.log('Current temperature is:' + value);
    ds18b20.temperature('28-0115a48dc0ff', cb);
}

function timerCallback() {
    ds18b20.temperature('', cb);
}

function printValue(id) {
    ds18b20.temperature(id, function(err, value) {
        console.log('' + id +'=' + value);
    });
}

function printAll() {
    ds18b20.sensors(function(err, ids) {
        console.log('ids=' + JSON.stringify(ids));
        _.each(ids, printValue);
    });
    setTimeout(printAll, 5000);
}

printAll();