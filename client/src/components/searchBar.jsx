import { useState } from "react"
import { useDispatch } from "react-redux";
import { searchCountries } from "../actions";

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
            <input type="text" onChange={handleChange} value={search}/>
            <input type="submit" value="buscar"/>
        </form>
    </div>
}