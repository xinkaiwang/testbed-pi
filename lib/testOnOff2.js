var Gpio = require('onoff').Gpio;

var button1 = new Gpio(17, 'in', 'both');
var button2 = new Gpio(18, 'in', 'both');

var button1Value = 0;
var button2Value = 0;


button1.watch(function(err, value) {
    button1Value = value;
    printStaus();
});

button2.watch(function(err, value) {
    button2Value = value;
    printStaus();
});

button1Value = button1.readSync();
button2Value = button2.readSync();
printStaus();

function printStaus() {
   //console.log(''+button1Value+button2Value);
   //process.stdout.write('' + (button1Value*2 + button2Value));
}
