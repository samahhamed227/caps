'use strict';
const events = require('../event/pool');

events.on('pickup',(payload)=>{deliverphase(payload)});
function deliverphase(payload){
setTimeout(()=>{makingpickup(payload);},3000);
setTimeout(()=>{makingdelivery(payload);},1000);

}


function makingpickup(payload){
    console.log(`Driver : pickup ${payload.orderid}`);
    events.emit('in-transit',payload);
}
function makingdelivery(payload){
    console.log(`Driver : diliveried ${payload.orderid}`);
    events.emit('in-transit',payload);
}


module.exports ={deliverphase, makingpickup,makingdelivery}