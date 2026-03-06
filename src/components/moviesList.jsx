export default function MoviesList(movies) {
    return (
        <ul className="list">
            {Movies.map((Movies) => (
                <MoviesItem key={moviesItem.id} Movies={Movies}></MoviesItem>
            ))}
        </ul>
    )
}