/*This program will light up an external led if the TTL input button is pressed. 
If the button is not being pressed, the led will not light. */


led.enable(false)//disables led matrix
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P12) == 1) {//checks if button is pushed, then the led is lit up
        pins.analogWritePin(AnalogPin.P0, 1023)
    }
    else {//if button is not pushed, then the led does not light up
        pins.analogWritePin(AnalogPin.P0, 0)
    }
    
})
