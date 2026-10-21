
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector(
        (store) => store.movies?.nowplaying
    );

    if (!movies || movies.length === 0) return null;

    const movie = movies[0];

    return (
        <div className="relative bg-black text-white">
            {/* Background trailer */}
            <VideoBackground id={movie.id} />

            {/* Movie title and buttons */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center z-10">
                <div className="px-6 md:px-16 max-w-2xl pt-10">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        {movie.title}
                    </h1>

                    <p className="hidden md:block text-lg mb-6 text-gray-200">
                        {movie.overview}
                    </p>

                    <div className="flex gap-3">
                        <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-300">
                            ▶ Play
                        </button>

                        <button className="bg-gray-500/70 text-white px-6 py-2 rounded font-semibold hover:bg-gray-500/90">
                            ℹ More Info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;
