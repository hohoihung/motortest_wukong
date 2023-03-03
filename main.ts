input.onButtonPressed(Button.A, function () {
    wuKong.stopMotor(wuKong.MotorList.M2)
    if (!(_direction)) {
        _M1Speed += 1
    } else {
        _M1Speed += -1
    }
    wuKong.setMotorSpeed(wuKong.MotorList.M1, _M1Speed)
    serial.writeValue("M1 Speed", _M1Speed)
})
input.onButtonPressed(Button.B, function () {
    wuKong.stopMotor(wuKong.MotorList.M1)
    if (!(_direction)) {
        _M2speed += 1
    } else {
        _M2speed += -1
    }
    wuKong.setMotorSpeed(wuKong.MotorList.M2, _M2speed)
    serial.writeValue("M2 Speed", _M2speed)
})
let _direction = 0
let _M2speed = 0
let _M1Speed = 0
wuKong.stopAllMotor()
_M1Speed = 0
_M2speed = 0
_direction = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
