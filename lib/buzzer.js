const { exec } = require("child_process");

function buzzerOn() {
    return exec("echo 1 | sudo tee /sys/class/leds/usr_buzzer/brightness'");
}

function buzzerOff() {
    return exec("echo 1 | sudo tee /sys/class/leds/usr_buzzer/brightness'");
}
  

module.exports = { buzzerOn, buzzerOff };