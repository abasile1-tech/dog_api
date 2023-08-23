import { useState } from "react";
import "./App.css";

function App() {
  const [dogImgUrl, setDogImgUrl] = useState("");

  // const fetchDog = () => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((response) => response.json())
  //     .then((data) => setDogImgUrl(data.message));
  // };

  const fetchDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setDogImgUrl(data.message);
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
