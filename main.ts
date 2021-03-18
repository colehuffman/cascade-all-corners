let b = 0
let a = 0
input.onButtonPressed(Button.A, function () {
    for (let a = 0; a <= 9; a++) {
        b = a - 1
        for (let index = 0; index <= 4; index++) {
            led.toggle(b - index, index)
        }
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    led.toggle(0, 0)
    basic.pause(100)
    led.toggle(0, 1)
    led.toggle(1, 0)
    basic.pause(100)
    led.toggle(2, 0)
    led.toggle(1, 1)
    led.toggle(0, 2)
    basic.pause(100)
    led.toggle(3, 0)
    led.toggle(2, 1)
    led.toggle(1, 2)
    led.toggle(0, 3)
    basic.pause(100)
    led.toggle(4, 0)
    led.toggle(3, 1)
    led.toggle(2, 2)
    led.toggle(1, 3)
    led.toggle(0, 4)
    basic.pause(100)
    led.toggle(4, 1)
    led.toggle(3, 2)
    led.toggle(2, 3)
    led.toggle(1, 4)
    basic.pause(100)
    led.toggle(4, 2)
    led.toggle(3, 3)
    led.toggle(2, 4)
    basic.pause(100)
    led.toggle(4, 3)
    led.toggle(3, 4)
    basic.pause(100)
    led.toggle(4, 4)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        for (let index = 0; index <= 5; index++) {
            if (b == 5) {
                a += 1
                b = 0
            } else if (a < 10) {
                led.plot(a, b)
                led.plot(b, a)
                b += 1
                basic.pause(100)
            }
        }
    }
})
