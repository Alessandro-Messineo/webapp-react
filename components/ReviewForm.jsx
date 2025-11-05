// import axios
import axios from "axios";

// importo state react
import { useState } from "react"


export default function ReviewForm({ idProp, reloadReviews }) {

    // settiamo valore iniziale dell'oggetto dei campi form
    const initialValues = {
        name: "Anonymous",
        text: "",
        vote: 1
    }

    // variabile di stato del form
    const [formData, setFormData] = useState(initialValues);

    // funzione di gestione valori dei campi
    const setFieldValue = e => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    // creiamo la url
    const apiUrl = `http://localhost:3001/api/movies/${idProp}/reviews`;

    // funzione invio dati
    const handleSubmit = e => {
        // preveniamo invio form
        e.preventDefault();
        // chiamata per store review
        axios.post(apiUrl, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(() => {
                setFormData(initialValues)
                reloadReviews();
            })
            .catch((err) => console.log(err))
    }

    return (
        <div >
            <header >
                <h5>Add your review</h5>
            </header>
            <div>
                <form onSubmit={handleSubmit}>
                    <div >
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div >
                        <label>Review</label>
                        <textarea  name="text" value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                    <div >
                        <label>Voto</label>
                        <input name="vote" type="number" min="1" max="5"  value={formData.vote} onChange={setFieldValue} />
                    </div>
                    <div >
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

