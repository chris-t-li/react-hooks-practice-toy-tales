import React, { useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyList, setToyList }) {
  function deleteToy(deletedToy) {
    //console.log("in ToyContainer: Delete", toy)
    fetch(`http://localhost:3001/toys/${deletedToy.id}`, {
      method: "DELETE"
    })
      .then(() => {
        const updatedToyList = toyList.filter(originalToy => {
          return originalToy.id !== deletedToy.id
        })
        setToyList(updatedToyList)
      })
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(res => res.json())
      .then(toys => setToyList(toys))
  }, [])

  const renderToys = toyList.map(toy => <ToyCard key={toy.id} toy={toy} deleteToy={deleteToy} />)
  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
