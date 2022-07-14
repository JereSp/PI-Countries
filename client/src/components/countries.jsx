import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCountries } from "../actions";
import Country from "./country";

export default function Countries(){
    let countries = useSelector((state) => state.filteredCountries )
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCountries())
    }, [])
    return <div>
        {countries.length ? countries.map((c) => {
            return < Country nombre={c.nombre} bandera={c.imagenBandera} continente={c.continente}/>
        }): <span>no hay paises</span>}
    </div>
}