'use strict';
const events =require('./event/pool');
require('./module/driver');
require('./module/vendor');
events.on('pickup',(payload)=>{DateEvent('pickup',payload)});
events.on('in-transit',(payload)=>{DateEvent('in-transit',payload)});
events.on('delievered',(payload)=>{DateEvent('delivered',payload)});

function DateEvent(event,payload) {
const date_event = new Date().toString();
console.log("event",{event,date_event,payload});
}
module.exports ={DateEvent}