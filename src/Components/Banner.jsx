import React, { useEffect, useState } from 'react'
import axios from './Axios'
import requests from './request'
const Banner = () => {
    const fetchData = async () => {
        const response = await axios.get(requests.fetchNetflixOrignal);
        setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);

    }
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }
    const [movie, setMovie] = useState([]);
    console.log(movie);
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <header className="banner" style={{
            backgroundImage: `url('https://image.tmdb.org./t/p/original${movie?.backdrop_path}')`,
            backkgroundSize: "cover",
            backgroundPosition: "center top",
        }}>
            <div className="banner__content">
                {/* title */}
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.orignal_name}</h1>
                <div className="banner__buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
    <h1 className="banner__description">{truncate(movie?.overview,150)}</h1>
                {/* 2btn */}
                {/* description */}
            </div>
            <div className="banner--fadeBottom" />

        </header>
    )
}

export default Banner
