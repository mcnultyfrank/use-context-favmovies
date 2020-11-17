import React, { useState, useContext} from 'react';
import { MovieContext} from "../context/MovieContext";
import styles from "./AddMovie.module.scss";

const AddMovie = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [movies, setMovies] = useContext(MovieContext);
  const updateName = e => setName(e.target.value);
  const updateYear = e => setYear(e.target.value);
  const addMovie = e => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, {name: name, year: year}])
  }


  return (
    <div>
      <form onSubmit={addMovie}>
      <input type="text" name={name} onInput = {updateName} placeholder = "Movie Name"/>
      <input type="text" name={year} onInput = {updateYear} placeholder="Year of Movie"/>
          <input type="submit"/>
      </form>

    </div>
  )
}

export default AddMovie
