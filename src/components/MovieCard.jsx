import '../App.css'
import Watchlist from './Watchlist';

const MovieCard = ({addMovie, movie, watchList, removeMovie}) => {

    let inWatchList = watchList.filter((notMovie) => {
        return notMovie.id === movie.id
    })

    let button

  return (
    <div className='movie-card'>
      <div>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        <h3>{movie.original_title}</h3>
      </div>
      <button onClick={() => addMovie(movie)}>Add To list</button>

    </div>
  );
};

export default MovieCard;
