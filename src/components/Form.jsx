import { useState } from "react";

function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name);
    setName("");
  }
  function handleChange(event) {
    setName(event.target.value);
  }

  const [name, setName] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="" className="label__lg">
          What needs to be done ?
        </label>
      </h2>
      <input
        type="text"
        name="text"
        id="new-todo-input"
        className="input input__lg"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary">
        Add
      </button>
    </form>
  );
}

export default Form;
