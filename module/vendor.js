'use strict';

const events = require('../event/pool');
let faker = require('faker');

function createorder(){
    let orderstore = faker.company.companyName();
    let orderid = faker.random.uuid();
    let ordercustom =faker.name.findName();
    let orderadress =faker.address.city();
 let orders = {orderstore,orderid,ordercustom,orderadress};
    return orders;
}

function pickup(orders=createorder()){
 events.emit('pickup',orders);
}
//change data evry 5 sec
setInterval(pickup,5000);

events.on('deliverd',makedelivered);

function makedelivered(payload){
    console.log(`Thank you, ${payload.orderid} `);
    
}

module.exports ={
    createorder,
    pickup,
    makedelivered
}