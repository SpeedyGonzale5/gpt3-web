import requests
from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
@app.route("/api/articles")
def articles():
    response = requests.get("https://ign-apis.herokuapp.com/articles")
    return response.json()

if __name__ == "__main__":
    app.run()
