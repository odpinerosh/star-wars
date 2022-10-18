import React, { useState, useRef } from 'react';
import Button from './UI/Button';
import classes from './AddMovie.module.css';

function AddMovie(props) {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');
  const [fetchError, setFetchError] = useState(null);

  async function submitHandler(event) {
    event.preventDefault();

    // could add validation here...
    
     const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    try {
      const response = await fetch('https://react-star-wars-48111-default-rtdb.firebaseio.com/starwars.json', {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      event.target.reset();
      console.log('DATA');
      console.log(data);

      } catch (error) {
        setFetchError(error);
        alert(fetchError);
      }

    /*props.onAddMovie(movie); */
  }

  return (
    <form onSubmit={submitHandler} className={classes.formull}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' ref={releaseDateRef} />
      </div>
      <Button classes='btn ui-btn' caption='Añadir Película'></Button>
    </form>
  );
}

export default AddMovie;
