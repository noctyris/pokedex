import Item from "./components/Item";
import Search from "./components/Search";
import { useState } from "react";

function App(props) {
  const pkmns = props.pokemons;
  const [isDetailed, setDetailed] = useState(false);

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

  const detailedTemplate = (
  <div className="subroot">
    <h1>hello world!</h1>
    <p onClick={setDetailed(false)}>&#x2715;</p>
  </div>);

  return isDetailed ? detailedTemplate : homeTemplate;
}

export default App;
