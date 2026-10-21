
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovie = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing",
            API_OPTIONS
        );

        const json = await data.json();

        console.log(json.results);

        dispatch(addNowPlaying(json.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovie;