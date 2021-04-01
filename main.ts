let b = 0
let c = 0
// cascades from top right corner
input.onButtonPressed(Button.A, function () {
    // runs inside code 10 times while also increasing "a" by 1 each time
    for (let a = 0; a <= 9; a++) {
        // makes b=a-1
        b = a - 1
        // loops inside code 5 times while increasing index by 1 each time
        for (let index = 0; index <= 4; index++) {
            // toggles (x,y)
            // x=b-index
            // y=index
            led.toggle(b - index, index)
        }
        // pauses for 100ms
        basic.pause(100)
    }
})
// cascades from bottom left
input.onButtonPressed(Button.AB, function () {
    // runs inside code 10 times while also increasing "a" by 1 each time
    for (let a = 0; a <= 9; a++) {
        // makes b=a-4
        b = a - 4
        // loops inside code 5 times while increasing index by 1 each time
        for (let index = 0; index <= 4; index++) {
            // makes c=4-index
            c = 4 - index
            // toggles (x,y)
            led.toggle(c, index - b)
        }
        // pauses for 100ms
        basic.pause(100)
    }
})
// cascades from bottom right
input.onButtonPressed(Button.B, function () {
    // runs inside code 10 times while also increasing "a" by 1 each time
    for (let a = 0; a <= 9; a++) {
        // makes b=a-4
        b = a - 4
        // loops inside code 5 times while increasing index by 1 each time
        for (let index = 0; index <= 4; index++) {
            // toggles (x,y)
            // x=index
            // y=index-b
            led.toggle(index, index - b)
        }
        // pauses for 100ms
        basic.pause(100)
    }
})
// cascades from top left
input.onGesture(Gesture.Shake, function () {
    // runs inside code 10 times while also increasing "a" by 1 each time
    for (let a = 0; a <= 9; a++) {
        // makes b=a-4
        b = a - 4
        // loops inside code 5 times while increasing index by 1 each time
        for (let index = 0; index <= 4; index++) {
            // toggles (x,y)
            // x=index-b
            // y=index
            led.toggle(index - b, index)
        }
        // pauses for 100ms
        basic.pause(100)
    }
})
