import { useEffect, useState } from 'react'
import Search from './components/Search'
import Spinner from './components/Spinner'
import MovieCard from './components/MovieCard';
import { useDebounce } from 'react-use';


const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [movieList, setMovieList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [debounceSearchTerm, setdebounceSearchTerm] = useState("");

  // this hook is used to pause for few second befoe searching
  // ie. when i type sthng then it waits for 500 milliseconds to search
  useDebounce(() => setdebounceSearchTerm(searchTerm), 500, [searchTerm]);
  

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage("");

    try { 
      const endpoint = query 
      ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS); 

      if(!response.ok) {
        throw new Error("Failed to fetch movies.");
      }

      const data = await response.json();
      
      if(data.Response === 'False') {
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);
      
    } catch (error) {
        console.error(`Error fetching movies ${error}`);
        setErrorMessage("Error fetching movies. Please try again later.")
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies(debounceSearchTerm);
  }, [debounceSearchTerm]);

  return (
    <>
      <main>
        <div className='pattern'></div>

        <div className='wrapper'>
          <header>
            <img src="/hero.png" alt="Hero banner" />
            <h1><span className='text-gradient'>Movies</span> For You</h1>
            <Search searchTerm={searchTerm} setSearchterm={setSearchTerm} />
          </header>

          <section className='all-movies'>
            <h2 className='mt-[40px]'>All Movies</h2>

            {isLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <p className='text-red-500'>{errorMessage}</p>
            ) : (
              <ul>
                  {movieList.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                    // <p key={movie.id} className='text-white'>{movie.title}</p>
                  ))}
              </ul>
            )}

          </section>

        </div>
      </main>
    </>
  )
}

export default App
