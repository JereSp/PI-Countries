import { Link } from "react-router-dom";
import styles from "./country.module.css"

export default function Country({id, nombre, bandera, continente}){ //destructuring de props 
    return <div className={styles.contenedor}>
        <Link className={styles.link} to={`/${id}`}>
            <div className={styles.nombre}>Nombre: {nombre} </div>
            <div>Continente: {continente}</div>
            <img className={styles.bandera} src={bandera} alt="bandera" width={200}/>
        </Link>
    </div>
}