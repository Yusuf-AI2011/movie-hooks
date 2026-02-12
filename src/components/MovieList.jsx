import React from "react";
const MovieList = ({ data }) => {
  // console.log(data);

  return (
    <>
      {data.map((item) => {
        // console.log(item);
        const { Poster, Title, Year, imdbID} = item;
        // console.log(Poster);
        // console.log(Title);
        // console.log(Year);

        return (
          <div key={imdbID}>
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
