import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer =(id)=>
{
    const dispatch = useDispatch();
    // get trailer of the movie 
const  getMovieTrailer =async()=>
{    
    const data = await fetch( `https://api.themoviedb.org/3/movie/${id}/videos`,API_OPTIONS)
    const json = await data.json();
    console.log(json);
    const filteredData = json.results.filter((video)=>video.type==="trailer")
    const trailer = filteredData.types?filteredData[0]:json.results[0];
    console.log(trailer)
    dispatch(addTrailer(trailer));

}
useEffect(()=>
{
    getMovieTrailer();
},[])


}
export default useMovieTrailer