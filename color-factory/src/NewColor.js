import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NewColor.css";

function NewColor({ addColor }) {
  const [formData, setFormData] = useState({ name: "", hex: "#ffffff" });
  const history = useHistory()
  function handleChange(e) {
    setFormData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addColor({ [formData.name]: formData.color });
    history.push('/colors')
  }

  const { name, color } = formData;

  return (
    <form onSubmit={handleSubmit} className="newColorForm">
      <label htmlFor="name">New Color:</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        value={name}
      />
      <label htmlFor="color">Color:</label>
      <input
        type="color"
        name="color"
        id="color"
        onChange={handleChange}
        value={color}
      ></input>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NewColor;
