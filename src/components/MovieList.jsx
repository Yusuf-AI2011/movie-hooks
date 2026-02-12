import React from "react";
import notfoundImage from "../image/not-found-image.png";
const MovieList = ({ data }) => {
  // console.log(data);

  return (
    <>
      {data.map((item) => {
        // console.log(item);
        const { Poster, Title, Year } = item;
        // console.log(Poster);
        // console.log(Title);
        // console.log(Year);
        

        return (
          <div key={Poster}>
            <div className="container">
              <img src={Poster} alt="img" className="image" />
              <h1 className="title">{Title}</h1>
              <p className="year">{Year}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
