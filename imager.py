import urllib.request
from urllib.parse import quote

with open("imager-list.txt", "r", encoding="utf-8") as f:
    for tmp in f.read().splitlines():
        name = tmp

        # Appliquer les transformations spécifiques
        if "'" in name: 
            name = name.replace(" ", "_")
        elif "♀" in name or "♂" in name: 
            name = name.replace(" ", "")
        elif "Méga " in name:
            divided = name.split(" ")
            divided[0] += "-"
            divided[1] += "_"
            name = "".join(divided)

        # Assurer un encodage correct avant de quoter
        name = quote(name.encode("utf-8"))

        try:
            # Lire la page pour trouver l'image
            page_content = urllib.request.urlopen(f"https://www.pokepedia.fr/{name}").read().decode("utf8")
            for i in page_content.split("\n"):
                if "2x" in i:
                    line = i
                    break
            
            # Construire l'URL de l'image
            url = "http://www.pokepedia.fr" + line.split("img src=\"")[1].split("\"")[0]
            destination = f"images/{tmp.lower()}.png"

            print(f"\n{tmp}{" "*(20-len(tmp))}->\t{url}\n└── ", end="")
            print(destination)

            # Télécharger l'image
            urllib.request.urlretrieve(url, destination)
        except Exception as e:
            print(f"Erreur pour {tmp}: {e}")
print(Style.RESET_ALL)
