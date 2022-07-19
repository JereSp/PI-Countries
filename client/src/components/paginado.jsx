import styles from './paginado.module.css'

export default function Paginado ({paisesPorPagina, totalPaises, paginacion}){
    const numeroPaginas = [];

    for(let i = 1; i <= Math.ceil(totalPaises / paisesPorPagina); i++){
        numeroPaginas.push(i)
    }

    return (
    <div className={styles.paginado}>
        <ul className={styles.lista}>
            {
                numeroPaginas.map((numero) => (
                    <li className={styles.boton}>
                        <a className={styles.link} onClick={() => paginacion(numero)} href="#">{numero}</a>
                    </li>
                ))
            }
        </ul>
    </div>
    )
}