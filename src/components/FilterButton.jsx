import { nanoid } from "nanoid";

function FilterButton(props) {
  function handleChange(e) {
    props.setFilter(e.target.value);
  }

  const id = nanoid()

  const select = (
    <div className="select">
      <label htmlFor={id}>{props.name}</label>
      <select
        onChange={handleChange}
        id={`select-${id}`}
        value={props.filter}
        className="filterbutton"
      >
        {props.options.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
    </div>
  );

  return select;
}

export default FilterButton;
