import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './fourbooking.css';

function Fourbooking() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'http://localhost/moviebackend/controllers/api/User/Get/horror.php'
        );
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <p className="h1two">Horror Movies</p>
      <div className="two-card">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                src={`http://localhost/moviebackend/controllers/api/User/upload/${movie.file}`}
                width={400}
                height={200}
                className="movie-image"
                alt={movie.name} 
              />
              <div className="movie-details">
                <div className="movie-name">Movie: {movie.name}</div>
                <div className="movie-price">Price: ₹ {movie.price}</div>
                <div className="movie-seats">Seats: {movie.ceats}</div> 
              </div>
              <Link
                to={{
                  pathname: `/fourbook/${movie.id}`,
                }}
                state={{
                  ticket_price: movie.price,
                  movie_name: movie.name,
                  movie_type: "Horror Movie",
                }}
              >
                <button className="view-button">Book</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>
    </>
  );
}

export default Fourbooking;

