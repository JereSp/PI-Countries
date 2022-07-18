export default function Paginado ({paisesPorPagina, totalPaises, paginacion}){
    const numeroPaginas = [];

    for(let i = 1; i <= Math.ceil(totalPaises / paisesPorPagina); i++){
        numeroPaginas.push(i)
    }

    return (
    <div>
        <ul>
            {
                numeroPaginas.map((numero) => (
                    <li>
                        <a onClick={() => paginacion(numero)} href="#">{numero}</a>
                    </li>
                ))
            }
        </ul>
    </div>
    )
}