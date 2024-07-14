import React from 'react'
import { useParams } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
    
    const {id}=useParams();
    
    const movie = movies.find(movie => movie.id === parseInt(id));
    console.log(movie);

    if(!movie){
        return <div>Movie Not Found</div>;
    }
  return (
    <div className="flex flex-col items-center text-center">
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="mb-4 my-4" />
        <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
        <p className="mb-1 text-xl"><span className='font-bold'>IMDB:</span> {movie.vote_average}</p>
        <p className="mb-1 text-xl"><strong>Adult Content:</strong> {movie.adult ? 'Yes' : 'No'}</p>
        <p className="mb-1 text-xl"><span className='font-bold'>Original Language:</span> {movie.original_language}</p>
        <p className="mb-1 text-xl"><span className='font-bold'>Release Date:</span> {movie.release_date}</p>
        <p>{movie.overview}</p>
    </div>
  )
}

export default MovieDetails
