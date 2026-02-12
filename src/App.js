import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  function submit(e) {
    let api = `https://www.omdbapi.com/?s=${name}&apikey=3e658e50`;
    axios.get(api).then((data) => {
      setData(data?.data?.Search);
    });
    console.log("submit ishladi");
    setName("");
  }

  useEffect(() => {
    let api = `https://www.omdbapi.com/?s=panda&apikey=3e658e50`;
    axios.get(api).then((data) => {
      setData(data?.data?.Search || []);
    });
  }, []);

  function handleName(e) {
    setName(e.target.value);
    // console.log(e.target.value);
  }

  console.log(data);

  return (
    <div className="wrapper">
      <div className="form">
        <input
          value={name}
          placeholder="Search ..."
          type="search"
          className="search"
          onChange={handleName}
        />
        <button onClick={submit} className="submit">
          Search
        </button>
      </div>
      <div className="bigContainer">
        <MovieList data={data} />
      </div>
    </div>
  );
};

export default App;
