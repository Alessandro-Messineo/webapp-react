import './FilmPage.css'

// importo ReviewCard
import ReviewCard from '../components/ReviewCard'
// importo ReviewForm
import ReviewForm from '../components/ReviewForm'

// importo axios
import axios from 'axios'

// importo state e effect
import { useState, useEffect } from "react"

// importo params
import { useParams } from "react-router-dom"

export default function FilmPage() {

    // variabile di stato del film
    const [movie, setMovie] = useState();

    // recuperiamo il parametro dinamico
    const { id } = useParams();

    // funzione per la chiamata axios
    const fecthMovie = () => {
        axios.get('http://localhost:3001/api/movies/' + id)
            .then(response => { setMovie(response.data) })
            .catch(error => { console.log(error) })
    }

    useEffect(fecthMovie, [id]);

    return (
        <>
            <div className="bg-pages">
                <h1 className="film-title">{movie?.title}</h1>
                <p>{movie?.director} </p>
                <p>{movie?.abstract} </p>
                <p>{movie?.image} </p>



                <div className="reviews-list">
                    {movie?.reviews.map((review) => (
                        <ReviewCard
                            key={review.id}
                            reviewProp={review}
                        />
                    ))}
                </div>

                <div>
                    <ReviewForm idProp={id} reloadReviews={fecthMovie} />
                </div>
            </div>
        </>
    )
}