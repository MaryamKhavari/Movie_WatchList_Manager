import MoviesItem from "./moviesItem"

export default function MoviesList({Movies}) {
    return (
        <ul className="list">
            {Movies.map((movie) => (
                <MoviesItem key={movie.id} movies={movie}></MoviesItem>
            ))}
        </ul>
    )
}