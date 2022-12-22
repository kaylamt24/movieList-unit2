
import '../App.css'

import MovieCard from './MovieCard'


const Watchlist = ({watchList, removeMovie}) => {

    const movieDisplay = watchList.map((movie, index) => {
        
        return (
        <MovieCard
        removeMovie={removeMovie}
        movie={movie}
        watchList={watchList}/>
    )
})
    return (
        <div className='watchlist'>
            <h1>My Watchlist</h1>
            <div className='movie-container'>{movieDisplay}</div>
        </div>
    )
}

export default Watchlist