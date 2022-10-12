import React, { useState } from 'react';
import logo from './logo.svg';
import Card from './UI/Card';
import Button from './UI/Button';
import Movie from './Movie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const fetchMovieHandler = () => {
      fetch('https://swapi.dev/api/films/')
        .then(
          response => {
            return response.json();
          }
        )
          .then(
            data => {
              const transformedMovies = data.results.map( film => {
                return {
                  id: film.episode_id,
                  title: film.title,
                  openingText: film.opening_crawl,
                  releaseDate: film.release_date
                }
              });
              setMovies(transformedMovies);
            }
          )
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card classes='card card-box-shadow' cardId='card-summary'>
          <Button classes='btn ui-btn' caption='Lista de Películas' onClick={fetchMovieHandler}></Button>
        </Card>
        <Card classes='card' cardId='card-wrapper'>
          {movies.map(movie => (
            <Movie key={movie.id}
                   title={movie.title}
                   opText={movie.openingText}
                   reDate={movie.releaseDate} />
          ))} 
        </Card>
      </header>
      

    </div>
  );
}

export default App;
