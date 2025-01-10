import { useState } from "react";
import { nanoid } from "nanoid";

function DetailedPage(props) {
  let data = {};
  props.pkmns.forEach((pk) => {
    if (props.id === pk.id) {
      data = pk;
    }
  });

  const imagesList = [data.location, ...data.images].map((im) => (
    <img id="main" src={"/imagesp/" + im} key={nanoid()} />
  ));

  // Fonction pour créer les tIcon avec effet hover
  const TIcon = ({ type }) => {
    const [isHovered, setIsHovered] = useState(false);
    const typeColor = `rgb(var(--${type.toLowerCase()}))`;

    return (
      <div
        className="tIcon"
        style={{
          backgroundColor: typeColor,
          boxShadow: isHovered ? `0 0 20px ${typeColor}` : "none",
          transition: "box-shadow 0.3s ease",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img id="typeI" src={`/types/${type.toLowerCase()}.svg`} />
      </div>
    );
  };

  return (
    <div key={data.id} className="detailed">
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
          <div
            className="dataitem"
            onClick={() => {
              props.setTypeFilter(data.types[0]);
              props.setDetailed(false);
            }}
          >
            <p className="type">
              Type {data.types[0] !== "" ? "principal" : ""} :
            </p>
            <TIcon type={data.types[0]} />
            <p
              style={{
                backgroundColor: `rgb(var(--${data.types[0].toLowerCase()}))`,
              }}
              id="typeT"
            >
              {data.types[0]}
            </p>
          </div>
          {data.types[1] !== "" ? (
            <div
              className="dataitem"
              onClick={() => {
                props.setTypeFilter(data.types[1]);
                props.setDetailed(false);
              }}
            >
              <p className="type">Type secondaire :</p>
              <TIcon type={data.types[1]} />
              <p
                style={{
                  backgroundColor: `rgba(var(--${data.types[1].toLowerCase()}), .8)`,
                }}
                id="typeT"
              >
                {data.types[1]}
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
            <p>Génération :</p>
            <div>
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DetailedPage;
