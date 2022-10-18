import React, { useState } from "react";

function ToyForm({ addNewToy }) {
  const [newToy, setNewToy] = useState({
    name: "",
    image: "",
    likes: 0
  })

  function handleOnChange(e) {
    setNewToy({ ...newToy, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    //addNewToy(newToy)
    fetch("http://localhost:3001/toys/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newToy)
    })
      .then(res => res.json())
      .then(data => {
        addNewToy(data)
        console.log(data)
      })
    setNewToy({
      name: "",
      image: "",
      likes: 0
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToy.name}
          onChange={handleOnChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newToy.image}
          onChange={handleOnChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
