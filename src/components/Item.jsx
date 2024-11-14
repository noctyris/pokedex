import { useState } from "react";

function Item(props) {
  const primaryColor = props.types[0].toLowerCase();
  let secondaryColor = primaryColor;
  try {
    secondaryColor = props.types[1].toLowerCase();
  } catch {}

  return (
    <div className="itemContainer">
      <div
        className="item"
        style={{
          backgroundColor: "rgba(var(--" + primaryColor + "), .4)",
          border: "2px solid rgba(var(--" + secondaryColor + "))",
        }}
        id={props.id}
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
