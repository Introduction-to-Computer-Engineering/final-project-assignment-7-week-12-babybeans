//connect both grounds

basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P12) == 1) {
        pins.analogWritePin(AnalogPin.P0, 1023);
    }
    if (pins.digitalReadPin(DigitalPin.P12) == 0) {
        pins.analogWritePin(AnalogPin.P0, 0);
    }
    else {
        pins.analogWritePin(AnalogPin.P0, 0);
    }
})
