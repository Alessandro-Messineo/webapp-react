// importo link da router-dom 
import { Link } from "react-router-dom"

export default function MoviesCard({ movieProp }) {

    const {id, title, image, director, genre, release_year, abstract} = movieProp

    return (
        <>
            <div class="film-card">
                <p>{id}</p>
                <p>{title}</p>
                <p>{image}</p>
                <p>{director}</p>
                <p>{genre}</p>
                <p>{release_year}</p>
                <p>{abstract}</p>
                <Link to={`movies/${id}`}>
                   Dettagli Film
                </Link>
            </div>
        </>
    )
}