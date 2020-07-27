import React, { useState, useEffect } from 'react'
import axios from './Axios'
import './row.css'
const Row = ({ title, fetchUrl,isLargeRow }) => {
    const [movies, setMovies] = useState([])
    const getMovies = async () => {
        const response = await axios.get(`${fetchUrl}`)
        setMovies(await response.data.results);
    }
    useEffect(() => {
        getMovies();
    }, [fetchUrl])

    return (
        <div className="row">
            {/* titile */}
            <h2>{title}</h2>
            {/* container with  posters  */}
            <div className="row__posters">
                {movies.map(movie => {
                    return <img key={movie.id} className={`row__poster ${isLargeRow&& "row__posterLarge"}`} src={isLargeRow?`https://image.tmdb.org/t/p/original${movie.poster_path}`:`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.name} />
                })}
            </div>

        </div>
    )
}

export default Row
