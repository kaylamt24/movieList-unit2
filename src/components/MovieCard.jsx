import '../App.css'


const MovieCard = ({addMovie, movie, watchList, removeMovie}) => {

    let inWatchList = watchList.filter((notMovie) => {
        return notMovie.id === movie.id
    })

    let button = inWatchList.length === 0 ? (<button onClick={() => addMovie(movie)}>Add To list</button>) : (<button onClick={() => removeMovie(movie)}>Remove From List</button>)

    //ternary condition1 ? if : else
    //this is where you can move the button to its own screen so it can be used several times over a large application

  return (
    <div className='movie-card'>
      <div>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        <h3>{movie.original_title}</h3>
      </div>
      {button}

    </div>
  );
};

export default MovieCard;
