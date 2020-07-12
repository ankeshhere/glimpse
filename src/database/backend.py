from flask import Flask, jsonify, request, json
from pymongo import MongoClient
from flask_cors import CORS
# import json
from bson.json_util import dumps

app = Flask(__name__)
CORS(app)

app.config['MONGO_DBNAME'] = 'glimpse'
app.config['MONGO_URL'] = 'mongo://localhost:27017'


client = MongoClient(port= 27017)

@app.route('/user', methods = ['POST'])
def addUser():
    # users = mongo.db.user_list
    user_info = request.get_json()
    print(user_info)
    user=client['glimpse']['user']
    response = user.insert_one(user_info)
    print("Added to DB")
    name = request.get_json()["name"]
    print("Name ==>", name)
    if response:
        return "Success"
    else:
        return "Failure"

if __name__ == '__main__':
    app.run("0.0.0.0", debug = True)