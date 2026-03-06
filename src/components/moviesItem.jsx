export default function MoviesItem({ movies }){
    return (
        <li className="item">
        <div>
            <div className="itemTitle">
                {movies.title}
            </div>

            <div className="itemMeta">
                {movies.category}
            </div>
        </div>
            <div className="amount">
                ${movies.amount}
            </div>
        </li>
    )
}