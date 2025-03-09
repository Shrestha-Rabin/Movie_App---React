

function MovieCard ({movie}) {
    // function MovieCard (props) {
    //     <h3>{props.movie.title}</h3>


    function onFavoriteClick () {

        alert("Clicked");
    }


    return (
        <>
            <div className="movie-card">

                <div className="movie-poster">
                    {/* dynamically sets the movie poster url */}
                    <img src={movie.url} alt={movie.title} />

                    <div className="movie-overlay">
                        <button className="favorite-btn" onClick={onFavoriteClick}>♥</button>
                    </div>
                </div>

                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date}</p>
                </div>
            </div>
        </>
    );
}

export default MovieCard