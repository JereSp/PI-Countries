import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCountries } from "../actions";
import Country from "./country";
import Paginado from "./paginado";

export default function Countries(){
    const [paginaActual, setPaginaActual] = useState(1)
    const [paisesPorPagina, setPaisesPorPagina] = useState(10)
    let countries = useSelector((state) => state.filteredCountries )
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCountries())
    }, [])

    const indiceUltimoPais = paginaActual * paisesPorPagina;
    const indicePrimerPais = indiceUltimoPais - paisesPorPagina;
    const paisesActuales = countries.slice(indicePrimerPais, indiceUltimoPais)

    const paginacion = (numeroPagina) => setPaginaActual(numeroPagina)

    return <div>
        {paisesActuales.length ? paisesActuales.map((c) => {
            return < Country id={c.id} nombre={c.nombre} bandera={c.imagenBandera} continente={c.continente}/>
        }): <span>no hay paises</span>}
        <Paginado paisesPorPagina={paisesPorPagina} totalPaises={countries.length} paginacion={paginacion}/>
    </div>
}