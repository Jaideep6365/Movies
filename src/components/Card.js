import React from 'react'
import { useState } from 'react';
import Movie from './Movie';

const Card = ({movies}) => {

    const [readmore,setReadmore]=useState(false);
    // const description= readmore ?movies.overview:`${movies.overview.substring(0,200)}.......`

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return (
        <div className='flex flex-wrap justify-center'>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
      
      );
}

export default Card
