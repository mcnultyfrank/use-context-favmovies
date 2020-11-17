import React from "react";
import styles from "./Movie.module.scss";

const Movie = (props) => {
  const {name, year, id} = props.movie;
  return (
    <div className = {styles.container}>
      <p>Movie name: {name}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default Movie;
