import requests
def thing():
    response = requests.get("https://ign-apis.herokuapp.com/articles")
    print(response.json()) 
if __name__ == "__main__":
    thing()