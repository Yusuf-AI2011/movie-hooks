import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import "./App.css";
import axios from "axios";

const App = () => {
  let api = `https://www.omdbapi.com/?s=panda&apikey=3e658e50`;
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(api).then((data) => {
      setData(data?.data?.Search);
    });
  }, []);

  function handleName(e) {
    setName(e.target.value);
    console.log(e.target.value);
  }

  function submit(e) {
    console.log("mana - " + e.target.value);
    
  }

  return (
    <div className="wrapper">
      <form className="form">
        <input
          value={name}
          placeholder="Search ..."
          type="search"
          className="search"
          onChange={handleName}
        />
      </form>
      <div className="bigContainer">
        <MovieList data={data} />
      </div>
    </div>
  );
};

export default App;
