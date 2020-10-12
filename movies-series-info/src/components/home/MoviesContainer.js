import React from 'react';

// import { connect } from 'react-redux';
import { useSelector, useDispatch} from "react-redux"
import MovieCard from './MovieCard';

const MoviesContainer = () => {
    const movies = useSelector(state => state.movies.movies)
    let content = '';

    content =
      movies.Response === 'True'
        ? movies.Search.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        : null;
    return <div className="row">{content}</div>;
}


export default MoviesContainer;
