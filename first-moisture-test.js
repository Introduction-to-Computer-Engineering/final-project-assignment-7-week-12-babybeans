led.setBrightness(64)

let reading = 0;

basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P12, 1);
    reading = pins.analogReadPin(AnalogPin.P0);
    pins.digitalWritePin(DigitalPin.P12, 0);
    let i = pins.map(reading, 8, 825, 0, 4);
    led.plot(0, i);
    led.plot(1, i);
    led.plot(2, i);
    led.plot(3, i);
    led.plot(4, i);
    //basic.showNumber(reading);
    basic.pause(1000);
    basic.clearScreen();
    basic.pause(100);
})
