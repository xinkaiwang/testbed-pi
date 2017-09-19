var counter = require('../../quadrature-decoder/quadrature_decoder.js')(0,1);

timeout();

function timeout() {
    setTimeout(timeout, 1000);
    console.log('' + counter.getCounter() + ',' + counter.getIgnoredCount() + ',' + counter.getConflictCount());
}
