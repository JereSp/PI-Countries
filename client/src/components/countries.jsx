import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCountries } from "../actions";
import Country from "./country";
import Paginado from "./paginado";
import styles from './countries.module.css'

export default function Countries(){
    const [paginaActual, setPaginaActual] = useState(1)
    const [paisesPorPagina, setPaisesPorPagina] = useState(12)
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
        <div className={styles.main}>
        {paisesActuales.length ? paisesActuales.map((c) => {
            return < Country id={c.id} nombre={c.nombre} bandera={c.imagenBandera} continente={c.continente}/>
        }): <span className={styles.noCountry}>Cargando</span>}
        </div>
        <Paginado paisesPorPagina={paisesPorPagina} totalPaises={countries.length} paginacion={paginacion}/>
    </div>
}