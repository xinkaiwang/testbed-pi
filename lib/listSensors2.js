'use strict';

var Promise = require('bluebird');
var _ = require('underscore');
var thermo = require('./dev/thermo');

function printAll() {
    thermo.getList(function(err, list) {
        console.log('list=' + JSON.stringify(list));
        _.each(list, function(item) {
            thermo.getReading(item, function(err, value) {
                console.log('' + item + '=' + value);
            });
        });
        setTimeout(printAll, 5000);
    });
}

printAll();
