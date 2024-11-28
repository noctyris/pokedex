import { nanoid } from "nanoid";


function DetailedPage(props) {
  // try {
    let data = {};
    props.pkmns.forEach((pk) => {
      if (props.id === pk.id) {
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
          <p onClick={() => props.setDetailed(false)}>&#x2715;</p>
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
                        "rgba(var(--" + data.types[1].toLowerCase() + "), .8)",
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
                {data.gen.match(/^\d+$/) === null ? (
                  // Méga / Gigamax
                  <p>{data.gen}</p>
                ) : (
                  // Normaux
                  <p>
                    {data.gen}
                    <sup>e</sup> génération
                  </p>
                )}
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  // } catch (TypeError) {
  //   return (
  //     <div className="detailed subroot">
  //       <header>
  //         <h1>Rien ici...</h1>
  //         <p onClick={() => props.setDetailed(false)}>&#x2715;</p>
  //       </header>
  //     </div>
  //   );
  // }
}

export default DetailedPage;
