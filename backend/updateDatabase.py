import MYSQLdb

def update(component, state):
	db = MySQLdb.connect("localhost", "max", "password", "HomeAutomation")
	cursor = db.cursor()
	cursor.execute("UPDATE status SET %s = %d WHERE ID = 1" %(component, state))
	db.commit()
	db.close()
