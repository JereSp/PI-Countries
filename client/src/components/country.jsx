
export default function Country({nombre, bandera, continente}){ //destructuring de props 
    return <div>
        <img src={bandera} alt="bandera" width={200}/>
        <div>Nombre: {nombre} Continente: {continente}</div>
    </div>
}