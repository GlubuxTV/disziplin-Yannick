let B = 0
let c = 0
let strip: neopixel.Strip = null
let a = 0
basic.forever(function () {
    if (a == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 10)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 10)
            strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        }
    }
})
basic.forever(function () {
    if (c == 0) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 10) {
            maqueen.motorStop(maqueen.Motors.All)
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
            basic.pause(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
            basic.pause(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 20)
            basic.pause(100)
            a = 1
            while (maqueen.Ultrasonic(PingUnit.Centimeters) <= 15) {
                a = 1
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 140)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 140)
                basic.showLeds(`
                    # # # # #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
                basic.pause(600)
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                maqueen.motorStop(maqueen.Motors.All)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 140)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 140)
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
                maqueen.motorStop(maqueen.Motors.All)
                maqueen.motorStop(maqueen.Motors.All)
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 75)
            }
            B = 1
            basic.clearScreen()
        }
    }
})
basic.forever(function () {
    if (B == 1) {
        c = 1
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
        basic.pause(2000)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 80)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 80)
        basic.pause(350)
        maqueen.motorStop(maqueen.Motors.All)
        if (maqueen.Ultrasonic(PingUnit.Centimeters) == 225) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 80)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 80)
            basic.pause(350)
            maqueen.motorStop(maqueen.Motors.All)
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
                maqueen.motorStop(maqueen.Motors.All)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 10)
                strip.showColor(neopixel.colors(NeoPixelColors.Red))
            }
            a = 0
            B = 0
            c = 0
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                maqueen.motorStop(maqueen.Motors.All)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 10)
                strip.showColor(neopixel.colors(NeoPixelColors.Orange))
            }
            a = 0
            B = 0
            c = 0
        }
    }
})
