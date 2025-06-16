const { exec } = require("child_process");

function buzzerOn() {
    return exec("echo 1 | sudo tee /sys/class/leds/usr-buzzer/brightness");
}

function buzzerOff() {
    return exec("echo 0 | sudo tee /sys/class/leds/usr-buzzer/brightness");
}
  

module.exports = { buzzerOn, buzzerOff };