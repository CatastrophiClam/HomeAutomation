import MySQLdb

def fetch():
	db = MySQLdb.connect("localhost","max","password","HomeAutomation")
	cursor = db.cursor()

	cursor.execute("SELECT * FROM status")
	for reading in cursor.fetchall():
        	answer = [x for x in reading]
	db.close()
	return answer



