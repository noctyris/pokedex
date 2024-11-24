function Search(props) {
  function handleChange(e) {
    props.setSearch(e.target.value);
  }

  return (
    <div className="search">
      <div className="inputbox">
        <input
          onChange={handleChange}
          value={props.search}
          type="text"
          required
        />
        <span>Recherche</span>
        <i></i>
      </div>
    </div>
  );
}

export default Search;
