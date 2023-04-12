# import config
# import requests
# import json 

# url = "https://suhailroushan.com"

# response = requests.get(url)
# response_json = response.json()

# print(response_json)
import requests
import json


with open('./config/default.json', 'r') as f:
    # Load the contents of the file as a JSON object
    data = json.load(f)
    

x = requests.get((data["URL"]))
print("\n=============================Python Request=============================")
print(data["URL"])
print(x.text)


