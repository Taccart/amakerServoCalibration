function servoPosition (i: number) {
    basic.showString("" + i, 40)
motor.servo(motor.Servos.S1, i)
    motor.servo(motor.Servos.S2, i)
    motor.servo(motor.Servos.S3, i)
    motor.servo(motor.Servos.S4, i)
    motor.servo(motor.Servos.S5, i)
    motor.servo(motor.Servos.S6, i)
    motor.servo(motor.Servos.S7, i)
    motor.servo(motor.Servos.S8, i)
}
input.onButtonPressed(Button.A, function () {
    angle += 30
    servoPosition(angle)
})
input.onButtonPressed(Button.AB, function () {
    angle = 0
    servoPosition(angle)
})
input.onButtonPressed(Button.B, function () {
    angle += -10
    servoPosition(angle)
})
let angle = 0
let list: number[] = []
