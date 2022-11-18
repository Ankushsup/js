// var events = require('events');

// var eventEmitter = new events.EventEmitter();

// var connectHandler = function connected() {
//     console.log('connection succesful.');

//     eventEmitter.emit('data received');
// }

// eventEmitter.on('connection', connectHandler);

// eventEmitter.on('data_received', function () {
//     console.log('data received succesfully');
// });

// eventEmitter.emit('connection');

// console.log("program ended");


var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('connection succesful.');

    // Fire the data_received event 
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function () {

    console.log('data recevied');
});

eventEmitter.emit('connection');

console.log("program ended");

