import SearchBar from './searchBar';
import {Link} from 'react-router-dom'
import styles from './navbar.module.css'

export default function Navbar(){
    return <div className={styles.nav}>
        <span className={styles.titulo}>Henry Countries PI</span>
        <SearchBar/>
        <Link to="/add">
            <button className={styles.button}>Crear actividad</button>
        </Link>
    </div>
}