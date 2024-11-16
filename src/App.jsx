import Item from "./components/Item";
import { useState } from "react";

function App(props) {
  const [pkmns] = useState(props.pokemons);
  const [crossData, sendData] = useState({});

  const pkmnList = pkmns.map((pk) => (
    <Item
      key={pk.id}
      id={pk.id}
      name={pk.name}
      num={pk.num}
      location={pk.location}
      types={pk.types}
    />
  ));

  return (
    <div className="subroot">
      <div className="carillion">{pkmnList}</div>
    </div>
  );
}

export default App;
