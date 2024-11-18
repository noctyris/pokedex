function Item(props) {
  console.log(props.types);
  const primaryColor = props.types[1].toLowerCase();
  const secondaryColor = props.types[0]!=="" ? props.types[0].toLowerCase() : props.types[1].toLowerCase();

  // console.log(primaryColor, secondaryColor);

  const style = {
    "--primaryColor": `var(--${primaryColor})`,
    "--secondaryColor": `var(--${secondaryColor})`,
  };

  return (
    <div className="itemContainer" onClick={() => props.onClick(props.id)}>
      <div className="item" id={props.id} style={style}>
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
