led.setBrightness(255)

let reading = 0;

class Moisture {
    getReading() {
        pins.digitalWritePin(DigitalPin.P12, 1);
        reading = pins.analogReadPin(AnalogPin.P0);
        pins.digitalWritePin(DigitalPin.P12, 0);

        let i = pins.map(reading, 8, 815, 0, 4);

        led.plot(0, 4 - i);
        led.plot(1, 4 - i);
        led.plot(2, 4 - i);
        led.plot(3, 4 - i);
        led.plot(4, 4 - i);
        if (i > 0 && i < 1) {
            this.ledRow5();
            basic.pause(100)
        }
        if (i > 1 && i < 2) {
            this.ledRow5();
            this.ledRow4();
            basic.pause(100)
        }
        if (i > 2 && i < 3) {
            this.ledRow5();
            this.ledRow4();
            this.ledRow3();
            basic.pause(100)
        }
        if (i > 3 && i < 4) {
            this.ledRow5();
            this.ledRow4();
            this.ledRow3();
            this.ledRow2();
            basic.pause(100)
        }
        if (i > 4) {
            this.ledRow1();
            this.ledRow2();
            this.ledRow3();
            this.ledRow4();
            this.ledRow5();
            basic.pause(100)
        }

    }
    ledRow1() {
        led.plot(0, 0);
        led.plot(1, 0);
        led.plot(2, 0);
        led.plot(3, 0);
        led.plot(4, 0);
    }
    ledRow2() {
        led.plot(0, 1);
        led.plot(1, 1);
        led.plot(2, 1);
        led.plot(3, 1);
        led.plot(4, 1);
    }
    ledRow3() {
        led.plot(0, 2);
        led.plot(1, 2);
        led.plot(2, 2);
        led.plot(3, 2);
        led.plot(4, 2);
    }
    ledRow4() {
        led.plot(0, 3);
        led.plot(1, 3);
        led.plot(2, 3);
        led.plot(3, 3);
        led.plot(4, 3);
    }
    ledRow5() {
        led.plot(0, 4);
        led.plot(1, 4);
        led.plot(2, 4);
        led.plot(3, 4);
        led.plot(4, 4);
    }
    ledRow(r: number): void {
        led.plot(0, r);
        led.plot(1, r);
        led.plot(2, r);
        led.plot(3, r);
        led.plot(4, r);
    }
}

basic.forever(function () {

    let test = new Moisture()
    test.getReading();
    basic.pause(1000);
    basic.clearScreen();
    basic.pause(100);
})
