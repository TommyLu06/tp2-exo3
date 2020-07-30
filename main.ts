function deplace_led (colonne: number) {
    for (let ligne = 0; ligne <= ligne; ligne++) {
        let colonne = 0
        if (led.point(colonne, ligne)) {
            let dir: number[] = []
            pro_lingne = ligne + dir[colonne]
            if (pro_lingne >= 4) {
                dir[colonne] = -1
            } else if (pro_lingne <= 0) {
                dir[colonne] = 1
            }
            led.unplot(colonne, ligne)
            led.plot(colonne, pro_lingne)
            break;
        }
    }
}
let pro_lingne = 0
let liste = [1, 1, 1, 1, 1]
led.plot(0, 0)
led.plot(1, 1)
led.plot(2, 2)
led.plot(3, 3)
led.plot(4, 4)
basic.forever(function () {
    for (let colonne_b = 0; colonne_b <= 4; colonne_b++) {
        deplace_led(colonne_b)
    }
})
