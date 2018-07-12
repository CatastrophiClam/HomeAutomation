import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BOARD)
GPIO.setup([37,29,11], GPIO.OUT)

trigger = open("/home/pi/Documents/Python_Projects/Rain.txt", "r",0)
str = trigger.read(2)
if str=="no" or str == "No":
	GPIO.output(29,1)
	GPIO.output(11,1)
	GPIO.output(37,1)

trigger.close()
