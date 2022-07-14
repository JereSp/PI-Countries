import { useDispatch } from "react-redux";
import { orderAlphabetical, orderPopulation, orderByContinent } from "../actions";

export default function Order(){
    let dispatch = useDispatch()

    function handleOrderAlphabetical(e){
        e.preventDefault();
        dispatch(orderAlphabetical(e.target.value))
    }

    function handleOrderPopulation(e){
        e.preventDefault();
        dispatch(orderPopulation(e.target.value))
    }

    function handleOrderByContinent(e){
        e.preventDefault();
        dispatch(orderByContinent(e.target.value))
    }

    return <div>
        <select onChange={handleOrderAlphabetical}>
            <option value="ascendente">A-Z</option>
            <option value="descendente">Z-A</option> 
        </select>

        <select onChange={handleOrderPopulation}>
            <option value="ascendente">Mayor poblacion</option>
            <option value="descendente">Menor poblacion</option> 
        </select>

        <select onChange={handleOrderByContinent}>
        <option value='todos'>All continents</option>
            <option value='Africa'>Africa</option>
            <option value='Antarctica'>Antarctica</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='North America'>North America</option>
            <option value='Oceania' >Oceania</option>
            <option value='South America'>South America</option>
        </select>
    </div>
}