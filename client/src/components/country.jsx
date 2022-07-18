import { Link } from "react-router-dom";

export default function Country({id, nombre, bandera, continente}){ //destructuring de props 
    return <div>
        <Link to={`/${id}`}>
            <div>Nombre: {nombre} Continente: {continente}</div>
            <img src={bandera} alt="bandera" width={200}/>
        </Link>
    </div>
}