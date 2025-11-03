import './FilmPage.css'

export default function FilmPage() {
    return (
        <>
            <div className="bg-pages">
                <h1 class="film-title">Nome Film</h1>

                <div class="reviews-list">
                    <div class="review-card">
                        <div class="review-content">
                            <p>"Un film bellissimo, mi ha emozionato dall'inizio alla fine!"</p>
                        </div>
                    </div>

                    <div class="review-card">
                        <div class="review-content">
                            <p>"Buona regia ma finale un po' debole."</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}