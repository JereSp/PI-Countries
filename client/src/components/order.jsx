import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderAlphabetical, orderPopulation, orderByContinent, getActivities, byActivity } from "../actions";
import {Link} from 'react-router-dom'
import styles from './order.module.css'

export default function Order(){
    let dispatch = useDispatch()

    const activities = useSelector(state => state.activities)

    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])

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

    function handlefilteredByActivity(e){
        e.preventDefault();
        dispatch(byActivity(e.target.value))
    }

    return <div className={styles.contenedor}>
        <div className={styles.filtros}>
        <span className={styles.label}>Orden Alfabetico</span>
        <select className={styles.select} onChange={handleOrderAlphabetical}>
            <option value="ascendente">A-Z</option>
            <option value="descendente">Z-A</option> 
        </select>
        <span className={styles.label}>Poblacion</span>
        <select className={styles.select} onChange={handleOrderPopulation}>
            <option value="ascendente">Mayor poblacion</option>
            <option value="descendente">Menor poblacion</option> 
        </select>
        <span className={styles.label}>Continente</span>
        <select className={styles.select} onChange={handleOrderByContinent}>
        <option value='todos'>Todos los continentes</option>
            <option value='Africa'>Africa</option>
            <option value='Antarctica'>Antarctica</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='North America'>North America</option>
            <option value='Oceania' >Oceania</option>
            <option value='South America'>South America</option>
        </select>
        <span className={styles.label}>Actividad</span>
        <select className={styles.select} onChange={handlefilteredByActivity}>
            <option value="todas">Todas</option>
            {activities.map((act) => (
                <option value={act.nombre}>{act.nombre}</option>
            ))}
        </select>
            <button className={styles.reset}>
                <a className={styles.link} href="/">Resetear</a>
            </button>
    </div>
    </div>
}