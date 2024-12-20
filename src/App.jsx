import { nanoid } from "nanoid";
import Item from "./components/Item";
import Search from "./components/Search";
import { useState } from "react";
import FilterButton from "./components/FilterButton";

function App(props) {
  const pkmns = props.pokemons;
  const [detailedId, setDetailed] = useState(null);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("Tous");
  const [genFilter, setGenFilter] = useState("Tous");

  const TYPES_MAP = {
    Tous: () => true,
    ...Object.fromEntries(
      [
        "acier",
        "combat",
        "dragon",
        "eau",
        "électrik",
        "fée",
        "feu",
        "glace",
        "insecte",
        "normal",
        "plante",
        "poison",
        "psy",
        "roche",
        "sol",
        "spectre",
        "ténèbres",
        "vol",
      ].map((type) => [
        type.charAt(0).toUpperCase() + type.slice(1),
        (pk) => pk.types.some((t) => t.toLowerCase() === type),
      ])
    ),
  };
  const TYPES_NAMES = Object.keys(TYPES_MAP);

  const GEN_MAP = {
    Tous: () => true,
    "1": (pk) => pk.gen === "1",
    "2": (pk) => pk.gen === "2",
    "3": (pk) => pk.gen === "3",
    "4": (pk) => pk.gen === "4",
    "5": (pk) => pk.gen === "5",
    "6": (pk) => pk.gen === "6",
    "7": (pk) => pk.gen === "7",
    "8": (pk) => pk.gen === "8",
    "9": (pk) => pk.gen === "9",
    Méga: (pk) => pk.gen.toLowerCase() === "méga",
    Gigamax: (pk) => pk.gen.toLowerCase() === "gigamax",
  };
  const GEN_NAMES = Object.keys(GEN_MAP);

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
                <p className="type">
                  Type {data.types[0] !== "" ? "principal" : ""} :
                  <img
                    id="typeI"
                    src={"/types/" + data.types[0].toLowerCase() + ".svg"}
                  />
                  <p
                    style={{
                      backgroundColor:
                        "rgba(var(--" + data.types[0].toLowerCase() + "), .8)",
                    }}
                    id="typeT"
                  >
                    {data.types[0]}
                  </p>
                </p>
              </div>
              {data.types[1] !== "" ? (
                <div className="dataitem">
                  <p className="type">
                    Type secondaire :
                    <img
                      src={"/types/" + data.types[1].toLowerCase() + ".svg"}
                      id="typeI"
                    />
                    <p
                      style={{
                        backgroundColor:
                          "rgba(var(--" +
                          data.types[1].toLowerCase() +
                          "), .8)",
                      }}
                      id="typeT"
                    >
                      {data.types[1]}
                    </p>
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
              <div className="dataitem">
                <p>Génération</p>
                <p>
                  {
                    (data.gen.match(/^\d+$/)===null) ? (
                      // Méga / Gigamax
                      <p>{data.gen}</p>
                    ) : (
                      // Normaux
                      <p>{data.gen}<sup>e</sup> génération</p>
                    )
                  }
                </p>
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

  const searchFilter = (pk) =>
    pk.name.toLowerCase().includes(search.toLowerCase());

  const pkmnList = pkmns
    .filter(searchFilter)
    .filter(TYPES_MAP[typeFilter])
    .filter(GEN_MAP[genFilter])
    .map((pk) => (
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
      <section>
        <h1>
          P<img src="/favicon.svg" id="pokeh1" />
          kedex
        </h1>
        <Search setSearch={setSearch} search={search} />
        {search ? (
          <div id="resultscounter">
            {pkmnList.length ? pkmnList.length : "Aucun"} résultat
            {pkmnList.length === 2 ? "" : "s"}
          </div>
        ) : (
          ""
        )}
        <div className="filterbuttons">
        <FilterButton
          options={TYPES_NAMES}
          filter={typeFilter}
          name="Type"
          setFilter={setTypeFilter}
        />
        <FilterButton
          options={GEN_NAMES}
          filter={genFilter}
          name="Génération"
          setFilter={setGenFilter}
        />
        </div>
        <div className="carillion">{pkmnList}</div>
      </section>
      <footer className="footer">
        <p>
          &copy; 2024{" "}
          <a style={{ color: "whitesmoke" }} href="https://github.com/onyyyyx">
            Onyx
          </a>
          . Tous droits réservés.
        </p>
        <nav>
          <ul>
            <li>
              <a onClick={() => (window.location.href = "/about.html")}>
                About
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );

  const detailedTemplate = getDetailedTemplate({ detailedId });

  return detailedId ? detailedTemplate : homeTemplate;
}

export default App;
