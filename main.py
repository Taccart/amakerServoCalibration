def servoPosition(i: number):
    basic.show_string("" + ("" + str(i)), 40)
    motor.servo(motor.Servos.S8, i)
    motor.servo(motor.Servos.S7, i)
 
def on_button_pressed_a():
    global angle
    angle += 30
    servoPosition(angle)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global angle
    angle = 0
    servoPosition(angle)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global angle
    angle += -10
    servoPosition(angle)
input.on_button_pressed(Button.B, on_button_pressed_b)

angle = 0

