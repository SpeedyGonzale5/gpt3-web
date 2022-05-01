import requests
def thing():
    response = requests.get("https://ign-apis.herokuapp.com")
    print(response.json()) 
if __name__ == "__main__":
    thing()