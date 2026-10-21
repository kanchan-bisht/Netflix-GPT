
import Header from "./Header";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";



const MainContainer =()=>{
  const movies = useSelector((store)=>store?.movies?.nowplaying)
  if(movies===null) return null

  //movie for trailere
     const mainMovie = movies[1];
    return(
        <div>
            <Header/>
            <VideoTitle    title={mainMovie.title ||mainMovie.original_title}  overview={mainMovie.overview}/>
            <VideoBackground   id ={mainMovie.id}/>
        </div>
    )
}
export default MainContainer;