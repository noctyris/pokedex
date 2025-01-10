import urllib.request
from urllib.parse import quote
from colorama import Fore, Back, Style

with open("imager-list.txt", "r") as f:
  for tmp in f.read().split("\n"):
    name = tmp

    if "'" in name: name = name.replace(" ", "_")
    elif "♀" in name or "♂" in name: name = name.replace(" ", "")
    elif "Méga" in name:
      divided = name.split(" ")
      divided[0]+="-"
      divided[1]+="_"
      name = "".join(divided)
    name=quote(name)

    for i in urllib.request.urlopen(f"https://www.pokepedia.fr/{name}").read().decode("utf8").split("\n"):
      if "2x" in i:
        line = i
        break
    
    url = "http://www.pokepedia.fr" + line.split("img src=\"")[1].split("\"")[0]
    destination = f"images/{tmp.lower()}.png"
    
    print(f"\n{Fore.BLUE + tmp}{Style.RESET_ALL + " "*(20-len(tmp))}->\t{Fore.GREEN + url + Fore.YELLOW}\n└── ", end="")
    print(destination)

    urllib.request.urlretrieve(url, destination)