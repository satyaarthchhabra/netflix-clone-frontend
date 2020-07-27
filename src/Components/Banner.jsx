import React, { useEffect, useState } from 'react'
import axios from './Axios'
import requests from './request'
const Banner = () => {
    const fetchData = async () => {
        const response = await axios.get(requests.fetchNetflixOrignal);
        setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);

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
            backgroundPosition: "center center",
        }}>
            <div className="banner__contents">
                {/* title */}
                <h1>{movie?.title || movie?.name || movie?.orignal_name}</h1>
                <div className="banner__buttons">
                    <button className="banner-buttons">Play</button>
                    <button className="banner-buttons">My List</button>
                </div>
    <h1 className="banner__discription">{movie?.overview}</h1>
                {/* 2btn */}
                {/* description */}
            </div>
        </header>
    )
}

export default Banner
