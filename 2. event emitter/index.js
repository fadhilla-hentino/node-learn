const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('send-event', (eventName) => {
    console.log(`event ${eventName} has been triggered`);
});
eventEmitter.emit('send-event', "notif");

class User extends EventEmitter{
    constructor(name) {
        super();
        this._username = name;
    }

    get name() {
        return this._username;
    }
}

let userA = new User('Eka');
userA.on('login', ()=> {
    console.log(`${userA.name} has been logged in`);
});

userA.emit('login');