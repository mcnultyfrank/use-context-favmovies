import React, {useState, createContext} from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Goodfellas',
            year: 1990,
            id: 1000,
        },
        {
            name: 'Casino',
            year: 1995,
            id: 1001,
        },
        {
            name: 'Deer Hunter',
            year: 1978,
            id: 1002,
        }
        ])
    return (
        <MovieContext.Provider value = {[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};