function FilterButton(props) {
  function handleChange(e) {
    props.setFilter(e.target.value);
  }

  const select = (
    <select onChange={handleChange} value={props.filter ? props.filter : "TYPE"} className="filterbutton">
      <option disabled>TYPE</option>
      {props.options.map((t) => (
        <option key={t}>{t}</option>
      ))}
    </select>
  );

  return select;
}

export default FilterButton;
