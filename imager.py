import urllib.request


with open("imager-list.txt", "r") as f:
  for tmp in f.read().split("\n"):
    name = ""
    for i in tmp:
      if i == " " in tmp and not "'" in tmp and not "♀" in tmp and not "♂" in tmp:
        if "Méga" in tmp:
          name+="-"
        else:
          name+="%20"        
      elif "'" in tmp and i == " ": name+="_"
      elif i == "é": name+="%C3%A9"
      elif i == "♀": name+="%E2%99%80"
      elif i == "♂": name+="%E2%99%82"
      else: name+=i
    print(name)
    page=urllib.request.urlopen(f"https://www.pokepedia.fr/{name}").read().decode("utf8").split("\n")
    for i in page:
      if "2x" in i:
        line = i
        break
    
    url = "http://www.pokepedia.fr" + line.split("img src=\"")[1].split("\"")[0]
    print(url)
    print(f"public/imagesp/{name.lower()}.png\n\n")

    urllib.request.urlretrieve(url, f"public/imagesp/{tmp.lower()}.png")