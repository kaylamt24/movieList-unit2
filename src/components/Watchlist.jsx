
import '../App.css'
import MovieScreen from './MovieScreen'
import MovieCard from './MovieCard'


const Watchlist = ({watchList, addMovie, removeMovie}) => {

    const movieDisplay = watchList.map((movie, index) => {
        <MovieCard
        addMovie={addMovie}
        removeMovie={removeMovie}
        movie={movie}
        watchList={watchList}/>
    })
    return (
        <div className='watchlist'>
            <h1>My Watchlist</h1>
            <div className='movie-container'>{movieDisplay}</div>
        </div>
    )
}

export default Watchlist