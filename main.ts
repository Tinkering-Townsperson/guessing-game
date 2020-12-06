input.onButtonPressed(Button.A, function () {
    guessNum += 1
    basic.showNumber(guessNum)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    if (guessNum == theNum) {
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    } else {
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.B, function () {
    guessNum += -1
    basic.showNumber(guessNum)
    basic.clearScreen()
})
let guessNum = 0
let theNum = 0
music.playMelody("C5 B C5 G E E C C ", 120)
music.playMelody("G - B - C5 C5 C5 - ", 120)
theNum = randint(0, 10)
guessNum = 0
