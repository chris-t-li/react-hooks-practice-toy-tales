import React, { useState } from "react";

function ToyCard({ toy, deleteToy }) {
  const [likes, setLikes] = useState(toy.likes);

  function addLike() {
    //console.log("added like in ToyContainer", toy)
    //setLikes(like => like + 1)
    //console.log({ ...toy, likes: likes })
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ ...toy, likes: likes + 1 })
    })
      .then(res => res.json())
      .then(setLikes(like => like + 1))
  }

  console.log(likes)

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={addLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => deleteToy(toy)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
