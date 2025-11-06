import './HomePage.css'

//importo MovieCard
import MoviesCard from '../components/MoviesCard';

// importo axios
import axios from 'axios'

// importo state e effect
import { useState, useEffect } from "react"

// import hook per contesto
import { useGlobal } from '../contexts/GlobalContext';

export default function HomePage() {

    // etrapoliamo da context var di stato
    const { setIsLoading } = useGlobal();

    // variabile di stato dei film
    const [movies, setMovies] = useState([]);

    // funzione per la chiamata axios
    const fecthMovies = () => {
        axios.get('http://localhost:3001/api/movies')
            .then(response => { setMovies(response.data) })
            .catch(error => { console.log(error) })
            .finally(() => { setIsLoading(false) })
    }

    useEffect(fecthMovies, []);

    return (
        <>
            <div className="bg-pages">
                <h1 className="page-title">Lista Film</h1>
                <div className="film-list">
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