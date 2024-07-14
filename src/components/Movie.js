import React, { useState } from 'react'
import './Movie.css';
import {Link } from 'react-router-dom';

const Movie = ({movie}) => {
    const [readmore, setReadmore] = useState(false);
  
    // const description = readmore ? movie.overview : `${movie.overview.substring(0, 100)}.......`;
  
    const description =`${movie.overview.substring(0,100)}...`;

    const readmoreHandler = () => {
      setReadmore(!readmore);
    };
  
    return (
      <div className='bg-blue-200 w-52 m-4 h-auto p-2 flex flex-col items-center rounded-2xl cards shadow-2xl gap-2'>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
        <h2 className='text-xl text-blue-900 font-bold'>{movie.title}</h2>
        <p>{description}</p>
        {/* <span onClick={readmoreHandler} className="readmore cursor-pointer text-blue-500">
          {readmore ? 'Show less' : 'Read more'}
        </span> */}
        <Link to={`/movies/${movie.id}`}>
        <button className='border p-2 px-9 bg-teal-400 rounded-xl transition duration-300 ease-in-out transform hover:bg-teal-500 hover:scale-105 text-white'>
            Read More
        </button>
        </Link>

      </div>
    );
  

}

export default Movie
