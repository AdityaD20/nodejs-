const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('please turn off the motor!');
 
setTimeout(() => {
    console.log('please turn off the motor! its gental remainder ');
}, 3000);

});
console.log("the script is runnning ")
 myEmitter.emit('WaterFull');