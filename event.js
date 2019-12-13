
const EventEmitter = require('events');

class MyEvent extends EventEmitter {}

const myEvent = new MyEvent();

myEvent.on('event', () => console.log('Event fired!'));

myEvent.emit('event');
