import requests
from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
@app.route("/api/articles")
def articles():
    response = requests.get("https://ign-apis.herokuapp.com/articles")
    print(response.json().get("data"))
    return response.json()

@app.route("/api/videos")
def videos():
    response = requests.get("https://ign-apis.herokuapp.com/videos")
    return response.json()

if __name__ == "__main__":
    app.run()
