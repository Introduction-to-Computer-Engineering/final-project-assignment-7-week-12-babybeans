/*This program flashes the three leds and then each of those
individual leds slowly light up and then fade out. */


class LightUpLED {

    flash() {
        //lights up leds slowly
        for (let index = 0; index <= 3071; index++) {
            pins.analogWritePin(AnalogPin.P8, index);
            pins.analogWritePin(AnalogPin.P12, index);
            pins.analogWritePin(AnalogPin.P16, index);
        }

        //fades out leds slowly
        for (let index = 3071; index >= 0; index--) {
            pins.analogWritePin(AnalogPin.P8, index);
            pins.analogWritePin(AnalogPin.P12, index);
            pins.analogWritePin(AnalogPin.P16, index);
        }
    }

    ledP8() {
        //lights led connected to P0 slowly
        for (let index = 0; index <= 3071; index++) {
            pins.analogWritePin(AnalogPin.P8, index);
            control.waitMicros(100)
        }
        //fades led connected to P0 slowly
        for (let index = 3071; index >= 0; index--) {
            pins.analogWritePin(AnalogPin.P8, index);

            control.waitMicros(100)
        }
    }

    ledP12() {
        //lights led connected to P2 slowly
        for (let index = 0; index <= 3071; index++) {
            pins.analogWritePin(AnalogPin.P12, index)
            control.waitMicros(100)
        }
        //fades led connected to P2 slowly
        for (let index = 3071; index >= 0; index--) {
            pins.analogWritePin(AnalogPin.P12, index)
            control.waitMicros(100)
        }
    }
    ledP16() {
        //lights led connected to P3 slowly
        for (let index = 0; index <= 3071; index++) {
            pins.analogWritePin(AnalogPin.P16, index);
            control.waitMicros(100)
        }
        //fades led connected to P3 slowly
        for (let index = 3071; index >= 0; index--) {
            pins.analogWritePin(AnalogPin.P16, index);
            control.waitMicros(100)
        }
    }

    randomDots() {
        let y: number = Math.randomRange(0, 4);
        let x: number = Math.randomRange(0, 4);
        let b: number = Math.randomRange(0, 3);

        if (b == 0) {
            for (let i: number = 0; i <= 3071; i += 25) {
                led.plotBrightness(x, y, i)
            }
            basic.pause(1000);
            for (let i: number = 0; i >= 0; i -= 25) {
                led.plotBrightness(x, y, i);
            }
        }
        if (b == 1) {
            this.ledP8();
        }
        if (b == 2) {
            this.ledP12();
        }
        if (b == 3) {
            this.ledP16();
        }


    }

    resetLED() {
        pins.analogWritePin(AnalogPin.P8, 0);
        pins.analogWritePin(AnalogPin.P12, 0);
        pins.analogWritePin(AnalogPin.P16, 0);
        basic.clearScreen();

        control.waitMicros(100);

    }
}



basic.forever(function () {
    let light = new LightUpLED;
    light.resetLED();
    light.randomDots();
    light.randomDots();
    light.randomDots();
    light.randomDots();

})

