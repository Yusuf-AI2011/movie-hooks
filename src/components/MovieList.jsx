import React from "react";
import notfoundImage from "/home/yusuf/Desktop/movie-hooks/src/image/not found image.png";
const MovieList = ({ data }) => {
  console.log(data);

  return (
    <>
      {data.map((item) => {
        // console.log(item);
        const { Poster, Title, Year } = item;
        // console.log(Poster);
        // console.log(Title);
        // console.log(Year);

        if (!Poster) Poster = notfoundImage;
        if (!Title) Title = `Unknown`;
        if (!Year) Year = `Unknown`;

        return (
          <div key={Title}>
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
