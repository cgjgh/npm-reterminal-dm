const { exec } = require("child_process");

function usrRedOn() {
    return exec("echo 1 | sudo tee /sys/class/leds/usr_led/brightness'");
}

function usrRedOff() {
    return exec("echo 1 | sudo tee /sys/class/leds/usr_led/brightness'");
}

module.exports = {usrRedOn, usrRedOff};
  