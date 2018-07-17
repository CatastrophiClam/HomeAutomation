from flask import Flask, Response, request
from fetchData import fetch
from updateDatabase import update
import json

app = Flask(__name__)

@app.route('/output', methods = ['GET'])
def output():
	data = fetch()
	resp = Response(json.dumps(data))
	resp.headers['Access-Control-Allow-Origin'] = '*'
	return resp

@app.route('/input', methods = ['GET'])
def input():
	component = request.args.get("component")
	state = request.args.get("state")
	update(component, state)
	answer = [True]
	resp =  Response(json.dumps(answer))
	resp.headers['Access-Control-Allow-Origin'] = '*'
	return resp
    
if __name__ == "__main__":
	app.run('0.0.0.0', threaded=True)
