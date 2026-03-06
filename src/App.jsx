import { useState } from 'react'
import './App.css'
import Card from './components/card'
import MoviesItem from './components/moviesItem';
import MoviesList from './components/moviesList';
import MoviesForm from './components/moviesForm';


function createID(){
  if (typeof crypto !== "undefined" && crypto.randomUUID){
    return crypto.randomUUID();
}
return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}
function App() {
  const [Movies, setMovies] = useState([
    // {id: createID(), title:"Drama", amount:"Watched", category:"Delete"},
  //  {id: createID(), title:"ٍEpic", amount:"unWatched", category:"Delete"},
  ])
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("Action");
  const [filter, setFilter] = useState("All");

  // Derived State
  const totalMovies = movies.length;
  const watchedCount = movies.filter((m) => m.watched).length;
  const unwatchedCount = movies.filter((m) => !m.watched).length;

  const filteredMovies = movies.filter((movie) => {
    if (filter === "Watched") return movie.watched;
    if (filter === "Unwatched") return !movie.watched;
    return true;
  });

  function handleAddMovie(data){
    const newMovie= {id:createID,...data};
    setMovies((prev)=>[newMovie],...prev)
  }
  return (
    <div className='page'>
      <header className='header'>
        <h1> Movie Watch List Manager </h1>
        <h2> count: {count} </h2>
      </header>
      <card title={"AddMovie"}>
        <p> Form will be Here </p>
      </card>

      <card title={"Movies"}>
        <p> List will be Here </p>
        <MoviesList Movies={Movies}></MoviesList>
      </card>

      <div className="cardBody">
        <p> Form will be here! </p>
        <MoviesForm onAddMovie={{handleAddMovie}}></MoviesForm>
      </div>
    </div>
  )
}

export default App
