# npm-reterminal-dm

A Node.js package for accessing and controlling [reTerminal DM](https://www.seeedstudio.com/ReTerminal-DM-p-5616.html) hardware components including touch panel, buzzer, LEDs, and light sensor.

## Installation

### From npm

```sh
npm install npm-reterminal-dm --save
```

### From Source

```sh
npm install https://github.com/cgjgh/npm-reterminal-dm
```

## Available Hardware Components

- **Touch Panel**: Multi-touch capacitive touchscreen
- **Buzzer**: Built-in buzzer for audio feedback
- **LEDs**: User-controllable LED (red)
- **Light Sensor**: Ambient light intensity sensor

## Usage

### Touch Panel

Control and monitor the capacitive touch panel:

```javascript
const InputEvent = require('npm-reterminal-dm');
const dev = require('npm-reterminal-dm/lib/deviceid');

const touch = new InputEvent.Touch(dev.tpPath());

// Listen for touch coordinates
touch.on('x-axis', function(coordinate) {
    console.log('X-axis coordinate: ' + coordinate);
});

touch.on('y-axis', function(coordinate) {
    console.log('Y-axis coordinate: ' + coordinate);
});
```

### Buzzer Control

Control the built-in buzzer:

```javascript
const buzz = require('npm-reterminal-dm/lib/buzzer');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function buzzerDemo() {
    console.log("Buzzer ON");
    buzz.buzzerOn();
    await sleep(1000);
    
    console.log("Buzzer OFF");
    buzz.buzzerOff();
    await sleep(1000);
}

buzzerDemo();
```

#### Buzzer Functions
- `buzzerOn()` - Turn buzzer on
- `buzzerOff()` - Turn buzzer off

### LED Control

Control the user LED:

```javascript
const led = require('npm-reterminal-dm/lib/led');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ledDemo() {
    console.log("User LED ON");
    led.usrRedOn();
    await sleep(1000);
    
    console.log("User LED OFF");
    led.usrRedOff();
    await sleep(1000);
}

ledDemo();
```

#### LED Functions
- `usrRedOn()` - Turn user red LED on
- `usrRedOff()` - Turn user red LED off

### Light Sensor

Read ambient light intensity:

```javascript
const light = require('npm-reterminal-dm/lib/light');

// Single reading
console.log("Light Intensity: " + light.lightSense());

// Continuous monitoring
setInterval(() => {
    console.log("Light Intensity: " + light.lightSense());
}, 1000);
```

#### Light Sensor Functions
- `lightSense()` - Returns current light intensity value

## Device Detection

The package automatically detects hardware components through the device ID system:

```javascript
const dev = require('npm-reterminal-dm/lib/deviceid');

// Get device paths
console.log("Touch panel path:", dev.tpPath());
console.log("Buttons path:", dev.buttonsPath());
console.log("Accelerometer path:", dev.accelPath());
```

## Hardware Requirements

- reTerminal DM device
- Linux-based operating system
- Root/sudo access for hardware control
- Node.js environment

## System Paths

The package interacts with the following system paths:
- Touch Panel: `/dev/input/eventX` (where X is auto-detected)
- Buzzer: `/sys/class/leds/usr-buzzer/brightness`
- User LED: `/sys/class/leds/usr-led/brightness`
- Light Sensor: `/sys/bus/iio/devices/iio:device0/in_illuminance_input`

## Error Handling

The package includes built-in error handling for:
- Device disconnection events
- File system access errors
- Hardware communication failures

```javascript
const touch = new InputEvent.Touch(dev.tpPath());

touch.on('error', function(err) {
    console.error('Touch panel error:', err);
});

touch.on('disconnect', function() {
    console.log('Touch panel disconnected');
});
```

## Permissions

Some functions require sudo privileges. Ensure your Node.js process has appropriate permissions to access hardware devices and system files.

## License

MIT

## Repository

[https://github.com/cgjgh/npm-reterminal-dm](https://github.com/cgjgh/npm-reterminal-dm)

## Issues

Report issues at: [https://github.com/cgjgh/npm-reterminal-dm/issues](https://github.com/cgjgh/npm-reterminal-dm/issues)