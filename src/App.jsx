import Item from "./components/Item";
import Search from "./components/Search";
import { useState } from "react";

function App(props) {
  const pkmns = props.pokemons;
  const [detailedId, setDetailed] = useState(null);

  function getDetailedTemplate(id) {
    try {
      let data = {};
      pkmns.forEach((pk) => {
        if (id.detailedId === pk.id) {
          data = pk;
        }
      });

      const imagesList = [data.location, ...data.images].map((im) => (
        <img src={"/imagesp/" + im} />
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
                <p>
                  Type {data.types[0] !== "" ? "principal" : ""} :{" "}
                  <span
                    style={{
                      backgroundColor:
                        "rgba(var(--" + data.types[1].toLowerCase() + "), .7)",
                    }}
                    id="type"
                  >
                    {"Pokémon " + data.types[1]}
                  </span>
                </p>
                {data.types[0] !== "" ? (
                  <p>
                    Type secondaire :{" "}
                    <span
                      style={{
                        backgroundColor:
                          "rgba(var(--" +
                          data.types[0].toLowerCase() +
                          "), .7)",
                      }}
                      id="type"
                    >
                      {"Pokémon " + data.types[0]}
                    </span>
                  </p>
                ) : (
                  ""
                )}
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

  const pkmnList = pkmns.map((pk) => (
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
      <h1>Pokedex</h1>
      {/* <Search /> */}
      <div className="carillion">{pkmnList}</div>
    </div>
  );

  const detailedTemplate = getDetailedTemplate({ detailedId });

  return detailedId ? detailedTemplate : homeTemplate;
}

export default App;
