import './Header.css';

// importo link da router-dom 
import { Link } from "react-router-dom"


export default function Header() {
    return (
        <nav className='container-header'>
            <div>
                <Link to="/">Bool Films</Link>
            </div>
        </nav>
    )
}

