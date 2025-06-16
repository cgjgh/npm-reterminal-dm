const led = require('../lib/led');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function delayedGreeting() {
    console.log("usrRedOn");
    led.usrRedOn();
    await sleep(1000);
    console.log("usrRedOff");
    led.usrRedOff();
    await sleep(1000);
  }
  
  delayedGreeting();




