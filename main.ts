let b = 0
let c = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        for (let a = 0; a <= 9; a++) {
            b = a - 1
            for (let index = 0; index <= 4; index++) {
                led.toggle(b - index, index)
            }
            basic.pause(100)
        }
    }
    for (let index = 0; index < 2; index++) {
        for (let a = 0; a <= 9; a++) {
            b = a - 4
            for (let index = 0; index <= 4; index++) {
                led.toggle(index, index - b)
            }
            basic.pause(100)
        }
    }
    for (let index = 0; index < 2; index++) {
        for (let a = 0; a <= 9; a++) {
            b = a - 4
            for (let index = 0; index <= 4; index++) {
                c = 4 - index
                led.toggle(c, index - b)
            }
            basic.pause(100)
        }
    }
    for (let index = 0; index < 2; index++) {
        for (let a = 0; a <= 9; a++) {
            b = a - 4
            for (let index = 0; index <= 4; index++) {
                led.toggle(index - b, index)
            }
            basic.pause(100)
        }
    }
    for (let index = 0; index < 2; index++) {
        for (let a = 0; a <= 4; a++) {
            for (let b = 0; b <= 4; b++) {
                led.toggle(a, b)
            }
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.B, function () {
	
})
