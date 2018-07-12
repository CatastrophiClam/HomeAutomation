import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BOARD)
GPIO.setup([18,29,37],GPIO.OUT)

GPIO.output(37,0)
GPIO.output(18,0)
GPIO.output(29,0)
GPIO.cleanup()

