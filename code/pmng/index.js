const EventsEmitter = require('events')

const logEvents =  require('./logEvents');

// class MyEmitter extends EventsEmitter {};

const myEmitter =  new EventsEmitter();   


myEmitter.on('logs', (msg, version) => logEvents(msg, version))


myEmitter.emit('logs', 'LogEvemts Created', '3.3' );
