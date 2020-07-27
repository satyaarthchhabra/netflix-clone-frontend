import React, { useState, useEffect } from 'react'
import axios from './Axios'
import movieTrailer from 'movie-trailer'
import Youtube from 'react-youtube'
const Row = ({ title, fetchUrl,isLargeRow }) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    const getMovies = async () => {
        const response = await axios.get(`${fetchUrl}`)
        setMovies(await response.data.results);
    }
    useEffect(() => {
        getMovies();
    }, [fetchUrl])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleClick=(movie)=>{
if (trailerUrl) {
    setTrailerUrl("");
}else{
    movieTrailer(movie?.name||"").then(url =>{
const urlParams =new URLSearchParams(new URL(url).search);
setTrailerUrl(urlParams.get('v'))
    }).catch(err => console.log(err));
}
      }
    return (
        <div className="row">
            {/* titile */}
            <h2>{title}</h2>
            {/* container with  posters  */}
            <div className="row__posters">
                {movies.map(movie => {
                    return <img key={movie.id} className={`row__poster ${isLargeRow&& "row__posterLarge"}`} src={isLargeRow?`https://image.tmdb.org/t/p/original${movie.poster_path}`:`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.name} onClick={()=>{handleClick(movie)}} />
                })}
            </div>
{trailerUrl&&<Youtube videoId={trailerUrl} opts={opts} />} 
        </div>
    )
}

export default Row
