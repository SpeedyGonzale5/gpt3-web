import requests
from flask import Flask
app = Flask(__name__)
@app.route("/articles")
def articles():
    response = requests.get("https://ign-apis.herokuapp.com/articles")
    return response.json()

if __name__ == "__main__":
    app.run()
