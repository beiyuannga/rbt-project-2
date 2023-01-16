let Soil_Moisture = 0
basic.showString("Hello!")
basic.forever(function () {
    Soil_Moisture = pins.analogReadPin(AnalogPin.P2)
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(Soil_Moisture)
    }
    if (Soil_Moisture > 650) {
        rekabit.setAllRgbPixelsColor(0xff0000)
        basic.showIcon(IconNames.Sad)
        rekabit.runMotor(MotorChannel.M2, MotorDirection.Forward, 128)
        while (Soil_Moisture > 500) {
            rekabit.setServoPosition(ServoChannel.S1, 30)
            basic.pause(1000)
            rekabit.setServoPosition(ServoChannel.S1, 150)
            basic.pause(1000)
            Soil_Moisture = pins.analogReadPin(AnalogPin.P2)
        }
        rekabit.brakeMotor(MotorChannel.M2)
    } else {
        rekabit.setAllRgbPixelsColor(0x00ff00)
        basic.showIcon(IconNames.Happy)
        led.plotBarGraph(
        0,
        pins.map(
        Soil_Moisture,
        650,
        500,
        0,
        25
        )
        )
    }
})
