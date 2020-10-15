import React, {useEffect} from 'react'
import { fetchMovies } from '../../actions/searchActions'
import {useSelector, useDispatch} from 'react-redux'
import SearchBar from './SearchBar'
import MovieCard from './MovieCard'

const Landing = () => {
    const dispatch = useDispatch()
    const movieList = useSelector(state => state.movies.movies)
    // useEffect(() => {
    //     async function fetch() {
    //         dispatch(fetchMovies())

    //     }
    //     fetch()
    // }, [])
    // movieList && console.log(movieList)

    const content = movieList.map((movie) => <MovieCard key={movie.imdbID} img={movie.Poster} title={movie.Title} year={movie.Year} id={movie.imdbID}/>)
    
    return (
        <div className="container">
            <div className="row">
                {movieList && content}
            </div>
        </div>
    )
}

export default Landing
