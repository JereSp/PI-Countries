import { useState } from "react"
import { useDispatch } from "react-redux";
import { searchCountries } from "../actions";
import styles from './searchBar.module.css'

export default function SearchBar(){
    const [search, setSearch] = useState('');
    let dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchCountries(search))
    }

    function handleChange(e) {
        e.preventDefault();
        setSearch(e.target.value)
    }


    return <div>
        <form onSubmit={handleSubmit}>
            <input className={styles.searchbar} type="text" onChange={handleChange} value={search} placeholder="Nombre del pais"/>
            <input className={styles.boton} type="submit" value="Buscar"/>
        </form>
    </div>
}