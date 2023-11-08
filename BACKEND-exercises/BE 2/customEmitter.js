const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {}

const customEventEmitter = new CustomEmitter();

module.exports = customEventEmitter;
