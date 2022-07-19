import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from './countryDetail.module.css'

export default function CountryDetail(){

    const [country, setCountry] = useState(null)
    let {id} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3001/countries/${id}`)
        .then((respuesta) => {
            setCountry(respuesta.data)
        })
    }, [])
    return <div className={styles.container}>
        <div className={styles.cardPais}>
            {   
                country?
                <div>
                    <img className={styles.bandera} src={country.imagenBandera} alt="bandera" />
                    <h2>{country.nombre}</h2>
                    <h3>Habitantes: {country.poblacion} millones</h3>
                    <h3>Capital: {country.capital}</h3>
                    <h3>Subregion: {country.subregion}</h3>
                    <h3>Area: {country.area} kilometros</h3>
                    
                </div>
                :
                <h3>cargando</h3>
            }
        </div>
        <div className={styles.cardActividad}>
            {
                country?
                country.activities[0]?
                <div>
                    <h3 className={styles.textoActividad}> Actividad: {country.activities[0].nombre} </h3>
                    <h3 className={styles.textoActividad}> Dificultad: {country.activities[0].dificultad} </h3>
                    <h3 className={styles.textoActividad}> Duracion: {country.activities[0].duracion} horas</h3>
                    <h3 className={styles.textoActividad}> Temporada: {country.activities[0].temporada} </h3>
                </div>
                
                :
                <h3>No hay actividad</h3>
                :
                <h3>Cargando</h3>
            }

        </div>
    </div>
}