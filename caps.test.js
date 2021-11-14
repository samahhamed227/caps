'use strict';
const events = require('./event/pool')

const caps = require('./caps');
const driver = require('./module/driver')
const vendor = require('./module/vendor')

describe('CAPS CONSOLE LOG', () => {
    let consoleSpy; 
    let ordercustom;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        ordercustom = {
            orderstore : "Mosciski - Donnelly",
            orderid : '1fc3abfb-be8f-4e8d-9b08-31dd336556c9',
            ordercustom : 'Bobbie Boehm',
            orderadress : 'Reinholdburgh'
        };
    })
    afterEach(()=>{
        consoleSpy.mockRestore();
    });

    it('verifies the "pickup" emit triggers console in CAPS',()=>{
        events.emit('pickup',ordercustom);
        expect(consoleSpy).toHaveBeenCalledTimes(1);
    })
    it('verifies the "in-transit" emit triggers console in CAPS',()=>{
        events.emit('in-transit',ordercustom);
        expect(consoleSpy).toHaveBeenCalledTimes(1);
    })
    it('verifies the "delivered" emit triggers console in CAPS',()=>{
        events.emit('delivered',ordercustom);
        expect(consoleSpy).toHaveBeenCalledTimes(0);
    })
})