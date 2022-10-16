import React, { useState, useEffect, useCallback } from 'react';
import logo from './logo.svg';
import Card from './UI/Card';
import Button from './UI/Button';
import Movie from './Movie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  //async function fetchMovieHandler() {
    const fetchMovieHandler = useCallback(async () => {
    setLoading(true);
    setFetchError(null);

    try {
      const response = await fetch('https://swapi.dev/api/films/');
      
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      console.log("Despues del THROW");
      const data = await response.json();
      const transformedMovies = data.results.map( film => {
        return {
          id: film.episode_id,
          title: film.title,
          openingText: film.opening_crawl,
          releaseDate: film.release_date
        };
      });
      setMovies(transformedMovies);
      } catch (error) {
       
        setFetchError(error);
       
      }
      setLoading(false);
    }, []);
    
  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card classes='card card-box-shadow' cardId='card-summary'>
          <Button classes='btn ui-btn' caption='Lista de Películas' onClick={fetchMovieHandler}></Button>
        </Card>
        <Card classes='card' cardId='card-wrapper'>
          {!isLoading && movies.length > 0 && (movies.map(movie => (
            <Movie key={movie.id}
                   title={movie.title}
                   opText={movie.openingText}
                   reDate={movie.releaseDate} />
            )))
          }
          {!isLoading && movies.length === 0 && <p>No hay películas.</p>}
          {isLoading && <p>Obteniendo películas...</p>}
          {fetchError && <p>Se presentó un error. Intente más tarde.</p>}
        </Card>
      </header>
    </div>
  );
}

export default App;
