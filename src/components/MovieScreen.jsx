import MovieCard from "./MovieCard";
import Watchlist from "./Watchlist";
import '../App.css'


const MovieScreen = ({watchList, page, setPage, movieList, addMovie, removeMovie}) => {
  const movieDisplay = movieList.map((movie, index) => {
    return <MovieCard 
    watchList={watchList}
    page={page}
    setPage={setPage}
    addMovie={addMovie}
    movie={movie}
    removeMovie={removeMovie}
     />;
  });

  return (
    <div className="page">
      <h1>Kayla's Movie Theater</h1>
      <h3>Add a movie to your watchlist!</h3>

      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
