import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css"


function Home () {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John-Wick", release_date: "2000"},
        {id: 2, title: "Terminator", release_date: "2000"},
        {id: 3, title: "The Metrix", release_date: "2000"}
    ];

    const handleSearch = (e) => {
        // Prevent the form from refreshing the page (important when using forms)
        e.preventDefault();
        setSearchQuery("");

        // const found = movies.some(movie => searchQuery === movie.title);
        // if(found) {
        //     alert("found");
        // }
    };

    return (
        <div className="home">

            <form className="search-form" onClick={() => handleSearch}>
                <input type="text" placeholder="Search  for movies...." value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>
            <button type="submit" className="search-btn" onClick={handleSearch}>Seach</button>

            {movies.map((movie) => 
            // displaying all movies
                // <MovieCard movie={movie} key={movie.id}/>)}

            // displaying only those movies whose search query are matching
            // movie.title.toLowerCase().startsWith(searchQuery) && 
            // we comment this beacuse we use API to search movies
            (
                <MovieCard movie={movie} key={movie.id}/>
            )
        )}

        </div>
    );  

}

export default Home