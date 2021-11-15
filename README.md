# Caps
## Author: Samah Hamed

### GitHub :  https://github.com/samahhamed227/caps  
### Start: 
```
npm start
```
# Tests
To run tests:
`npm test`
![](lab11.PNG)
### Sample Output
```
event {
  event: 'pickup',
  date_event: 'Mon Nov 15 2021 19:53:37 GMT+0200 (Eastern European Standard Time)',
  payload: {
    orderstore: 'Frami, Klocko and Berge',
    orderid: 'f22d288a-4f13-4366-98f3-9e629a046586',
    ordercustom: 'Rebecca Reynolds Sr.',
    orderadress: 'East Cathrynborough'
  }
}
Driver : pickup f22d288a-4f13-4366-98f3-9e629a046586
event {
  event: 'in-transit',
  date_event: 'Mon Nov 15 2021 19:53:38 GMT+0200 (Eastern European Standard Time)',
  payload: {
    orderstore: 'Frami, Klocko and Berge',
    orderid: 'f22d288a-4f13-4366-98f3-9e629a046586',
    ordercustom: 'Rebecca Reynolds Sr.',
    orderadress: 'East Cathrynborough'
  }
}
Driver : diliveried f22d288a-4f13-4366-98f3-9e629a046586
Deprecation Warning: faker.random.uuid is now located in faker.datatype.uuid
event {
  event: 'pickup',
  date_event: 'Mon Nov 15 2021 19:53:42 GMT+0200 (Eastern European Standard Time)',
  payload: {
    orderstore: 'Abernathy Inc',
    orderid: '22d6b1f7-0c67-40a0-a8fe-3f46c4157b2f',
    ordercustom: 'Matt Gutmann',
    orderadress: 'Helenfort'
  }
}
Driver : pickup 22d6b1f7-0c67-40a0-a8fe-3f46c4157b2f
event {
  event: 'in-transit',
  date_event: 'Mon Nov 15 2021 19:53:43 GMT+0200 (Eastern European Standard Time)',
  payload: {
    orderstore: 'Abernathy Inc',
    orderid: '22d6b1f7-0c67-40a0-a8fe-3f46c4157b2f',
    ordercustom: 'Matt Gutmann',
    orderadress: 'Helenfort'
  }
}
Driver : diliveried 22d6b1f7-0c67-40a0-a8fe-3f46c4157b2f
```
# UML
![](class11.png)