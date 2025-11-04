import './MoviesCard.css'

// importo link da router-dom 
import { Link } from "react-router-dom"

export default function MoviesCard({ movieProp }) {

    const { id, title, image, director, genre, release_year, abstract } = movieProp

    return (
        <>
            <div className="movie-card">
                <div className="movie-image">
                    <img src={`http://localhost:3001/img/${image}`} alt={`Locandina di ${title}`} />
                </div>

                <div className="movie-content">
                    <h2 className="movie-title">{title}</h2>
                    <p className="movie-director"><strong>Regia:</strong> {director}</p>
                    <p className="movie-genre"><strong>Genere:</strong> {genre}</p>
                    <p className="movie-year"><strong>Anno:</strong> {release_year}</p>
                    <p className="movie-abstract">{abstract}</p>

                    <Link to={`movies/${id}`} className="movie-link">
                        Dettagli Film
                    </Link>
                </div>
            </div>
        </>
    )
}