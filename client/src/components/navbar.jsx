import SearchBar from './searchBar';
import {Link} from 'react-router-dom'

export default function Navbar(){
    return <div>
        <SearchBar/>
        <Link to="/add">
            <button>Crear actividad</button>
        </Link>
    </div>
}