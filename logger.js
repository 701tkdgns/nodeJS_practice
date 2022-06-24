const EventEmitter = require('events');
const uuid = require('uuid'); // 임의의 univ 생성

// console.log(uuid.v4());


class Logger extends EventEmitter{
    log(msg) {
        // Call event
        this.emit('message', {id:uuid.v4(), msg:msg,});
    }
}

// module.exports = Logger;