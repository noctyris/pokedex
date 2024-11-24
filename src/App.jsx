import { nanoid } from "nanoid";
import Item from "./components/Item";
import Search from "./components/Search";
import { useState } from "react";

function App(props) {
  const pkmns = props.pokemons;
  const [detailedId, setDetailed] = useState(null);
  const [search, setSearch] = useState("");

  function getDetailedTemplate(id) {
    try {
      let data = {};
      pkmns.forEach((pk) => {
        if (id.detailedId === pk.id) {
          data = pk;
        }
      });

      const imagesList = [data.location, ...data.images].map((im) => (
        <img id="main" src={"/imagesp/" + im} key={nanoid()} />
      ));

      return (
        <div key={data.id} className="detailed subroot">
          <header>
            <h1>{data.name}</h1>
            <p onClick={() => setDetailed(false)}>&#x2715;</p>
          </header>
          <main>
            {imagesList}

            <div className="datafield">
              <div className="dataitem">
                <p>Numéro :</p>
                <p id="num">{data.num}</p>
              </div>
              <div className="dataitem">
                <p>Catégorie :</p>
                <p>Pokémon {data.category}</p>
              </div>
              <div className="dataitem">
                <p>
                  Type {data.types[0] !== "" ? "principal" : ""} :
                  <img
                    id="type"
                    src={"/types/" + data.types[0].toLowerCase() + ".svg"}
                  />
                </p>
              </div>
              {data.types[1] !== "" ? (
                <div className="dataitem">
                  <p>
                    Type secondaire :
                    <img
                      src={"/types/" + data.types[1].toLowerCase() + ".svg"}
                      id="type"
                    />
                  </p>
                </div>
              ) : (
                ""
              )}
              <div className="dataitem">
                <p>Poids :</p>
                <p id="num">{data.weight ? data.weight + "kg" : "?"}</p>
              </div>
              <div className="dataitem">
                <p>Taille :</p>
                <p id="num">{data.size ? data.size + "m" : "?"}</p>
              </div>
            </div>
          </main>
        </div>
      );
    } catch (TypeError) {
      return (
        <div className="detailed subroot">
          <header>
            <h1>Rien ici...</h1>
            <p onClick={() => setDetailed(false)}>&#x2715;</p>
          </header>
        </div>
      );
    }
  }

  const searchFilter = (pk) => pk.name.toLowerCase().includes(search.toLowerCase());

  const pkmnList = pkmns.filter(searchFilter).map((pk) => (
    <Item
      key={pk.id}
      id={pk.id}
      name={pk.name}
      num={pk.num}
      location={pk.location}
      types={pk.types}
      onClick={setDetailed}
    />
  ));

  const homeTemplate = (
    <div className="subroot">
      <h1>
        P<img src="/favicon.svg" id="pokeh1" />kedex
      </h1>
      <Search setSearch={setSearch} search={search} />
      <div className="carillion">{pkmnList}</div>
    </div>
  );

  const detailedTemplate = getDetailedTemplate({ detailedId });

  return detailedId ? detailedTemplate : homeTemplate;
}

export default App;
