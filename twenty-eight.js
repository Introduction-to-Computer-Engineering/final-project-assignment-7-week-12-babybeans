


class LightUpLED {

    ledP8() {
        for (let index = 0; index <= 3071; index++) {//slowly lights led connected to P8
            pins.analogWritePin(AnalogPin.P8, index);
            control.waitMicros(100)
        }
 
        for (let index = 3071; index >= 0; index--) {//slowly fades led connected to P8
            pins.analogWritePin(AnalogPin.P8, index);

            control.waitMicros(100)
        }
    }

    ledP12() {
        for (let index = 0; index <= 3071; index++) {//slowly lights led  connected to  P12
            pins.analogWritePin(AnalogPin.P12, index)
            control.waitMicros(100)
        }
        for (let index = 3071; index >= 0; index--) {//slowly fades led connected to P12
            pins.analogWritePin(AnalogPin.P12, index)
            control.waitMicros(100)
        }
    }
    ledP16() {
        for (let index = 0; index <= 3071; index++) {//slowly lights led connected to P16
            pins.analogWritePin(AnalogPin.P16, index);
            control.waitMicros(100)
        }
        for (let index = 3071; index >= 0; index--) {//fades led connected to P16 slowly
            pins.analogWritePin(AnalogPin.P16, index);
            control.waitMicros(100)
        }
    }

    randomDots() {
        let y: number = Math.randomRange(0, 4); //sets y axis for led matrix
        let x: number = Math.randomRange(0, 4);//sets x axis for led matrix
        let b: number = Math.randomRange(0, 3);//determines if an  external led or an led on the matrix will be displayed

        if (b == 0) {//displays dot on led matrix
            for (let i: number = 0; i <= 3071; i += 25) {
                led.plotBrightness(x, y, i)
            }
            basic.pause(1000);
            for (let i: number = 0; i >= 0; i -= 25) {//fades dot on led matrix
                led.plotBrightness(x, y, i);
            }
        }
        if (b == 1) {//flashes P8
            this.ledP8();
        }
        if (b == 2) {//flashes P12
            this.ledP12();
        }
        if (b == 3) {//flashes P16
            this.ledP16();
        }


    }

    resetLED() {//resets the leds to 0 ands clears screen
        pins.analogWritePin(AnalogPin.P8, 0);
        pins.analogWritePin(AnalogPin.P12, 0);
        pins.analogWritePin(AnalogPin.P16, 0);
        basic.clearScreen();

        control.waitMicros(100);

    }
}



basic.forever(function () {//runs randomDots function of class LightUpLed continually
    let light = new LightUpLED;//instanciates the class
    light.resetLED();
    light.randomDots();//runs random dots
})

