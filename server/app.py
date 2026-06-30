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

@app.route("/api/like", methods=["POST"])
def likePost():
    data = request.json
    id = str(data.get("pid"))
    ref = db.reference('/messages/')
    likecount = ref.order_by_child('likes').get()
    newlikecount = likecount + 1
    id_ref = ref.child(id)
    freerobux = id_ref.get()
    #id_ref.update({
    #    freerobux,
    #    "likes": newlikecount
    #})
    return f"Liked post {id}"

@app.route("/api/unlike", methods=["POST"])
def heartAttack():
    data = request.json
    id = str(data.get("pid"))
    ref = db.reference('/messages/')
    likecount = ref.order_by_child('likes').get()
    newlikecount = likecount - 1
    id_ref = ref.child(id)
    id_ref.update({'likes': newlikecount})
    return f"Unliked post {id}"

@app.route("/api/makepost", methods=["POST"])
def makePost():
    data = request.json
    ref = db.reference('/messages/')
    id = "-" + ''.join(random.choices(string.ascii_uppercase + string.digits, k=19))
    name = str(data.get("name"))
    name = name.lower()
    if name == "None" or "":
        name = "@anonymous@wegogo"
    else:
        name = "@" + name + "@wegogo"
    if name == "@wegogo@wegogo":
        name = "@anonymous@wegogo"
    message = str(data.get("message"))
    timestamp = str(data.get("timestamp"))
    print(message)
    id_ref = ref.child(id)
    id_ref.set({
        'name': name,
        'message': message,
        'timestamp': timestamp,
        'service': "wegogo",
        "likes": 0
    })
    return f"Created {id}"