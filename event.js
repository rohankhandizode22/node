const events=require('events');//import event module
const eventEmitter=new events.EventEmitter();// create a object
const event1=()=>console.log("Event 1");
const event2=()=>console.log("Event 2");
//to bind an event handler with an eventemitter
eventEmitter.on('myevent', event1);
eventEmitter.on('myevent', event2);
//fire an event
eventEmitter.emit('myevent');
//remove eventhandler from the eventEmmiter
eventEmitter.removeListener("myevent", event1);
eventEmitter.emit('myevent');
console.log("Progarm End");