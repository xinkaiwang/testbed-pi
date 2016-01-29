'use strict';

var _ = require('underscore');
var ds18b20 = require('ds18b20');
var deviceConfig = require('./ds18b20DeviceConfig.json');

// id='28-0115a48dc0ff', name='t1'
function getNameById(id) {
    var match;
    _.each(deviceConfig.devices, function(value, key) { 
        if (value === id) {
            match = key;
        }
    });
    return match;
}

function getIdByName(name) {
    return deviceConfig.devices[name];
}

function getReading(name, cb) {
    ds18b20.temperature(getIdByName(name), function(err, value) {
        cb(err, value);
    });
}

function getList(cb) {
    ds18b20.sensors(function(err, ids) {
        if (err) {
            cb(err);
        } else {
            var list = _.map(ids, getNameById);
            cb(null, list);
        }
    });
}

module.exports = {
    getNameById: getNameById,
    getIdByName: getIdByName,
    getList: getList,
    getReading: getReading
};
