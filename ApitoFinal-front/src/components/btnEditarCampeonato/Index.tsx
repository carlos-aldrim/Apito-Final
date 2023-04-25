import { Link } from "react-router-dom"

interface estado{
    ativo?:boolean
}

export function BtnEditar(props:estado){
	const isActive = props.ativo
    let btn
	if(isActive){	
        btn = <Link to={"/editarCampeonato"}>
            <button className="px-4 py-2 flex items-center bg-white text-preto rounded font-black text-lg font-home">
                Editar
            </button>
		</Link> 
	}

    return(
        <div>
            {btn}
        </div>
    )
}