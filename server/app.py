from dotenv import load_dotenv
from flask import Flask
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

app = Flask(__name__)

@app.route("/")
def index():
    return "Wegogo is a Flask-based version of AMAZING NAME (Originally by @nameswastaken on GitHub) created by Wish.<br>Please visit the client to post or view posts."

@app.route("/api/")
def apiIndex():
    return "Ello, mate! This fine endpoint is an API for Wegogo. Go to /api/posts to GET posts, /api/makepost to POST posts."

@app.route("/api/posts", methods=["GET"])
def getPosts():
    return "soon"

@app.route("/api/makepost", methods=["POST"])
def makePost():
    return "soon"