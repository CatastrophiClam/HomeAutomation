import MySQLdb

def update(component, state):
	db = MySQLdb.connect("localhost", "max", "password", "HomeAutomation")
	cursor = db.cursor()
	cursor.execute("UPDATE status SET %s = %d WHERE ID = 1;" %(component, int(state)))
	db.commit()
	db.close()
