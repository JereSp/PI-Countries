import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function CountryDetail(){

    const [country, setCountry] = useState(null)
    let {id} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3001/countries/${id}`)
        .then((respuesta) => {
            setCountry(respuesta.data)
        })
    }, [])
    return <div>
        {   
            country?
            <div>
                <h3>{country.nombre}</h3>
                <img src={country.imagenBandera} alt="bandera" />
                <h2>Habitantes: {country.poblacion}</h2>
            </div>
            :
            <h3>cargando</h3>
        }
    </div>
}