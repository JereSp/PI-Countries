import styles from "./landing.module.css"

export default function Landing(){
    return <div className={styles.container}>
        <img className={styles.image} src="https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80" alt="landing"/>
        <button className={styles.boton}>Ingresar</button>
    </div>
}