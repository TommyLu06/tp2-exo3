rand = 0
x = randint(0, 4)
y = 0
y1 = -1
y2 = -2

def on_forever():
    global y, y1, y2, rand, x
    basic.pause(100)
    led.unplot(x, y)
    led.unplot(x, y1)
    led.unplot(x, y2)
    y += 1
    y1 += 1
    y2 += 1
    led.plot(x, y)
    led.plot_brightness(x, y1, 160)
    led.plot_brightness(x, y2, 49)
    rand = randint(0, 4)
    if y > 4:
        led.unplot(x, y)
        y = 0
        x = rand
    if y1 > 4:
        led.unplot(x, y1)
        y1 = -1
        x = rand
    if y2 > 4:
        led.unplot(x, y2)
        y2 = -2
        x = rand
basic.forever(on_forever)
