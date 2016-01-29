'use strict';

var Promise = require('bluebird');
var _ = require('underscore');
var getList = Promise.promisify(require('./dev/thermo').getList);
var getReading = Promise.promisify(require('./dev/thermo').getReading);

function printAll() {
    getList()
        .then(function(list) {
            console.log('list=' + JSON.stringify(list));
            return _.map(list, function(item) {
                return getReading(item)
                    .then(function(value) {
                        console.log('' + item + '=' + value);
                    });
            })
        })
        .then(Promise.all)
        .then(function() {
            console.log('allDone');
        });
    setTimeout(printAll, 5000);
}

printAll();
