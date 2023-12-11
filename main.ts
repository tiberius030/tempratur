basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 41) {
        basic.setLedColor(0xff0000)
        basic.showString("Heiß! Du bist Tod Death Valley ")
    } else if (input.temperature() > 36) {
        basic.setLedColor(0xff0000)
        basic.showString("Heiß!")
    } else if (input.temperature() > 30) {
        basic.setLedColor(0xff8000)
        basic.showString("Warm")
    } else if (input.temperature() > 22) {
        basic.setLedColor(0x00ff00)
        basic.showString("Normal")
    } else if (input.temperature() > 18) {
        basic.setLedColor(0x65471f)
        basic.showString("OK")
    } else {
        basic.setLedColor(0x00ffff)
        basic.showString("Kalt")
    }
})
