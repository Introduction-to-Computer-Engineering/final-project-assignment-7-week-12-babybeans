/*This program flashes the three leds and then each of those
individual leds slowly light up and then fade out. */

class LightUpLED {

    flash() {
        //lights up leds slowly
        for (let index = 0; index <= 3071; index++) {
            basic.clearScreen();

            pins.analogWritePin(AnalogPin.P8, index);
            pins.analogWritePin(AnalogPin.P12, index);
            pins.analogWritePin(AnalogPin.P16, index);
            if (index == 2000) { //displays firework on 5x5 display
                for (let j = 0; j <= 255; j += 25.5) {
                    led.plotBrightness(2, 2, j);
                    basic.pause(100);
                    led.plotBrightness(2, 1, j - 50);
                    led.plotBrightness(1, 2, j - 50);
                    led.plotBrightness(2, 3, j - 50);
                    led.plotBrightness(3, 2, j - 50);
                }


            }

        }

        //fades out leds slowly
        for (let index = 3071; index >= 0; index--) {
            basic.clearScreen();
            pins.analogWritePin(AnalogPin.P8, index);
            pins.analogWritePin(AnalogPin.P12, index);
            pins.analogWritePin(AnalogPin.P16, index);
            if (index == 2000) {
                for (let j = 255; j >= 0; j -= 25.5) {
                    led.plotBrightness(2, 2, j);
                    basic.pause(100);
                    led.plotBrightness(2, 1, j + 50);
                    led.plotBrightness(1, 2, j + 50);
                    led.plotBrightness(2, 3, j + 50);
                    led.plotBrightness(3, 2, j + 50);
                }
            }
            basic.clearScreen();
        }
    }

    ledP8() {//lights up P3 then fades P3
        for (let i = 0; i <= 3071; i++) {
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P8, i);
            control.waitMicros(1000)

        }
        for (let i = 0; i >= 0; i--) {
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P8, i);
            control.waitMicros(1000)
        }
    }


    ledP12() {//lights up P4 then fades P4
        for (let i = 0; i <= 3071; i++) {
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P12, i);
            control.waitMicros(1000)
        }
        for (let i = 3071; i >= 0; i--) {
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P12, i)
            control.waitMicros(1000)
        }
    }


    ledP16() {//lights up P10 then fades P10
        for (let i = 0; i <= 3071; i++) {
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P16, i);
            control.waitMicros(1000)
        }
        for (let i = 3071; i >= 0; i--) {
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P16, i);
            control.waitMicros(1000);
        }
    }
}

basic.forever(function () {

    //set pins that will be used to 0
    pins.analogWritePin(AnalogPin.P8, 0);
    pins.analogWritePin(AnalogPin.P12, 0);
    pins.analogWritePin(AnalogPin.P16, 0);

    //flashes the three leds
    let light = new LightUpLED;
    light.flash();//runs flash function
    light.ledP8();//runs led3 function
    light.ledP12();//runs ledP4
    light.ledP16();//runs ledP10
    light.ledP16();//runs led10
    light.ledP12();//runs led4
    light.ledP8();//runs led3
})

