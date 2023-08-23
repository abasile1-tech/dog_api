import { useState } from "react";
import "./App.css";

function App() {
  const [dogImgUrl, setDogImgUrl] = useState("");

  const fetchDog = () => {
    console.log("Function called");
    // fetch the JSON from URL
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogImgUrl(data.message));
    // turn the JSON into JavaScript
    // set the state of the dogImgUrl
  };

  return (
    <>
      <div id="app">
        <h1>RANDOM DOG</h1>
        <img src={dogImgUrl} alt="dog" />
        <button onClick={fetchDog}>Gimme a dog!</button>
      </div>
    </>
  );
}

export default App;
