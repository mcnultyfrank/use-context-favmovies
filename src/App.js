import logo from './logo.svg';
import './App.css';
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import Movie from "./Movie";
import { MovieProvider} from "./context/MovieContext";
import AddMovie from "./AddMovie/AddMovie.jsx";

function App() {

  return (
    <MovieProvider>
      <div className="App">
        <MovieList />
        <Navbar />
        <AddMovie />

      </div>
    </MovieProvider>
  );
}

export default App;
