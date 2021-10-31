import React, { useState, useEffect } from "react";
import axios from "../Api/axios";
import './Movie.css';
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Movie({ title, fetchUrl, isLargeRow }) 
{ 
    const [movies, setMovies] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState("");

  // Options for react-youtube
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
    
    useEffect(() => {
            async function fetchData() {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
                return request;
            }
            fetchData();
    }, [fetchUrl]);

    const handleClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            let trailerurl = await axios.get(
            `/movie/${movie.id}/videos?api_key=8cc2fc49462cddc83883ef44a09976f9`
            );
            console.log(trailerurl.data.results?.key)
            setTrailerUrl(trailerurl.data.results[0]?.key);
        } 
      };


    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                { movies?.map(movie => (
                    <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    key = {movie.id}
                    onClick={() => handleClick(movie)}
                    src={`${baseImgUrl}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} 
                    />
                    
                ))}
            </div>

            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}


export default Movie;