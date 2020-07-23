let x = randint(0, 4)
let y = 0
let y1 = -1
let y2 = -2
basic.forever(function () {
    basic.pause(100)
    led.unplot(x, y)
    y += 1
    led.plotBrightness(x, y, 255)
    led.unplot(x, y1)
    y1 += 1
    led.plotBrightness(x, y1, 160)
    led.unplot(x, y2)
    y2 += 1
    led.plotBrightness(x, y2, 49)
    if (y > 4) {
        led.unplot(x, y)
        y = -1
    }
    if (y1 > 4) {
        led.unplot(x, y1)
        y1 = -1
    }
    if (y2 > 4) {
        led.unplot(x, y2)
        y2 = -1
    }
})
