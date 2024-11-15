import { useState } from "react";

function Item(props) {
  const primaryColor = props.types[0].toLowerCase();
  let secondaryColor = primaryColor;
  try {
    secondaryColor = props.types[1].toLowerCase();
  } catch {}

  // Définir les variables CSS pour les couleurs
  const style = {
    '--primaryColor': `var(--${primaryColor})`,
    '--secondaryColor': `var(--${secondaryColor})`,
  };

  return (
    <div className="itemContainer">
      <div
        className="item"
        id={props.id}
        style={style}
      >
        <div className="item-in" id="itemTitle">
          {props.name}
        </div>
        <div id="itemId">{"N°" + props.num}</div>
        <img
          src={"/imagesp/" + props.location}
          alt={"Image of " + props.name}
          className="item-in"
          id="itemImg"
        />
      </div>
    </div>
  );
}

export default Item;
