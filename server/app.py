from flask import Flask, request
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from flask_cors import CORS
import random, string

cred = credentials.Certificate('serviceAccountKey.json')
# create serviceAccountKey in running directory

firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://amazing-name-default-rtdb.europe-west1.firebasedatabase.app' # put in your db url
})
app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return "Wegogo is a Flask-based version of AMAZING NAME (Originally by @nameswastaken on GitHub) created by Wish.<br>Please visit the client to post or view posts."

@app.route("/api/")
def apiIndex():
    return "Ello, mate! This fine endpoint is an API for Wegogo. Go to /api/posts to GET posts, /api/makepost to POST posts."

@app.route("/api/posts", methods=["GET"])
def getPosts():
    ref = db.reference('/messages/')
    posts = ref.get()
    return posts

@app.route("/api/makepost", methods=["POST"])
def makePost():
    data = request.json
    ref = db.reference('/messages/')
    id = "-" + ''.join(random.choices(string.ascii_uppercase + string.digits, k=19))
    name = str(data.get("name"))
    if name == "None" or "":
        name = "Anonymous (Wegogo)"
    else:
        name = name + " (Wegogo)"
    message = str(data.get("message"))
    timestamp = str(data.get("timestamp"))
    print(message)
    id_ref = ref.child(id)
    id_ref.set({
        'name': name,
        'message': message,
        'likes': 0,
        'timestamp': timestamp
    })
    return f"Created {id}"