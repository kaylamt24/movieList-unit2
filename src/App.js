import "./App.css";

import { useState } from "react";
import { useEffect } from "react";

import Watchlist from './components/Watchlist';
import MovieScreen from "./components/MovieScreen";
import Header from "./components/Header";
import axios from "axios";

//when we make a request, we will receive an array of information. we need a place to store the data. The next step is importing use state.

function App() {
  const [movieList, setMovieList] = useState([]); //getData
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  const addMovie = (movie) =>
    setWatchList([...watchList, movie])
  
  //spread

  const removeMovie = (movie) => {
    let newState = watchList.filter((notMovie) => {
      return notMovie !== movie
    })
    setWatchList(newState)
  }
  //save to movieList state
  //invoke getData INSIDE of the useEffect and add page as a dependancy
  const getData = () =>
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });


  useEffect(() => {
    getData();
  }, [page]);



  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          watchList={watchList}
          page={page}
          setPage={setPage}
          movieList={movieList}
          addMovie={addMovie}
          removeMovie={removeMovie}
        />
        <Watchlist
        watchList={watchList} removeMovie={removeMovie}/>
      </main>
    </div>
  );
}

export default App;
