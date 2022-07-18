import { useState } from "react"
import axios from "axios"
import {useHistory} from "react-router"

export function validate(input){
    let error = {};
    if(!input.nombre){
        error.nombre = "El nombre es requerido"
    } else if (/[0-9]/.test(input.nombre)){
        error.nombre = "Nombre invalido"
    }
    
    if(!input.dificultad){
        error.dificultad = "Debe ingresar una dificultad"
    } else if (!/\d/.test(input.dificultad)){  //tambien puede ser /\D/
        error.dificultad = "Debe ser un numero"
    } else if(input.dificultad < 1 || input.dificultad > 5)
        error.dificultad = "Debe ser un numero entre 1 y 5"
    
    if(!input.duracion){
        error.duracion = "Debe ingresar una duracion"
    } else if(!/\d/.test(input.duracion)){
        error.duracion = "Debe ser un numero"
    } else if(input.duracion < 1 || input.duracion > 24)
        error.duracion = "Debe ser un numero entre 1 y 24"

    if(!input.temporada){
        error.temporada = "Debe ingresar una temporada"
    } else if(!["verano","primavera","invierno","otoño"].includes(input.temporada))
        error.temporada = "Debe ingresar una temporada valida, verano, otoño, primavera o invierno"
    
    if(!input.idpais){
        error.idpais = "Debe ingresar un codigo de pais"
    } else if(!/^[A-Z]{3}$/.test(input.idpais)){
        error.idpais = "Debe ser un codigo valido"
    }

    return error;
}

export default function AddActiviy(){
    const [activity, setActivity] = useState({})
    const [error, setError] = useState({});
    let history = useHistory();

    function handleChange(e){
        e.preventDefault();
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        })

        let objError = validate({...activity, [e.target.name]:e.target.value})
        setError(objError)
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:3001/activities', activity)
        .then(() => {
            history.push('/home')
        })
    }

    return <div>
        <h3>Agregar actividad</h3>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input onChange={handleChange} name="nombre" type="text" value={activity.nombre}/>
            {
                error.nombre && <p>{error.nombre}</p>
            }
            <label>Dificultad</label>
            <input onChange={handleChange} name="dificultad" type="text" value={activity.dificultad}/>
            {
                error.dificultad && <p>{error.dificultad}</p>
            }
            <label>Duracion</label>
            <input onChange={handleChange} name="duracion" type="number" value={activity.duracion}/>
            {
                error.duracion && <p>{error.duracion}</p>
            }
            <label>Temporada</label>
            <input onChange={handleChange} name="temporada" type="text" value={activity.temporada}/>
            {
                error.temporada && <p>{error.temporada}</p>
            }
            <label>Codigo Pais</label>
            <input onChange={handleChange} name="idpais" type="text" value={activity.idpais}/>
            {
                error.idpais && <p>{error.idpais}</p>
            }
            <input type="submit"/>
        </form>
    </div>
}