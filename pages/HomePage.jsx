import './HomePage.css'

//importo filmCard
import MoviesCard from '../components/MoviesCard';

// importo axios
import axios from 'axios'

// importo state e effect
import { useState, useEffect } from "react"

export default function HomePage() {

    // variabile di stato dei film
    const [movies, setMovies] = useState([]);

    // funzione per la chiamata axios
    const fecthMovies = () => {
        axios.get('http://localhost:3001/api/movies')
            .then(response => { setMovies(response.data) })
            .catch(error => { console.log(error) })
    }

    useEffect(fecthMovies, []);

    return (
        <>
            <div className="bg-pages">
                <h1 class="page-title">Lista Film</h1>
                <div class="film-list">
                    {movies.map((movie) => (
                        <MoviesCard
                            key={movie.id}
                            movieProp={movie}
                        />
                    ))
                    }
                </div>
            </div>
        </>
    )
}