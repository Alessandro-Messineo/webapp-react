export default function MoviesCard({ movieProp }) {

    const {id, title, image, director, genre, release_year, abstract} = movieProp

    return (
        <>
            <div class="film-card">
                <p>Titolo del Film</p>
            </div>
        </>
    )
}