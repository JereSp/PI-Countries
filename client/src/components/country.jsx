import { Link } from "react-router-dom";
import styles from "./country.module.css"

export default function Country({id, nombre, bandera, continente}){ //destructuring de props 
    return <div className={styles.contenedor}>
        <Link className={styles.link} to={`/${id}`}>
            <div className={styles.nombre}>{nombre} </div>
            <div className={styles.continente}>{continente}</div>
            <div className={styles.imageWrap}>
                <img className={styles.bandera} src={bandera} alt="bandera" width={200}/>
            </div>
        </Link>
    </div>
}