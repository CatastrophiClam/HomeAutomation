import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BOARD)
GPIO.setup([11,29,37],GPIO.OUT)

GPIO.output(37,0)
GPIO.output(11,0)
GPIO.output(29,0)
GPIO.cleanup()
