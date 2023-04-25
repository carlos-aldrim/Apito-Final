import { Link } from "react-router-dom"

interface botao{
    link: string,
    texto: string,
    classname: string,
    onClick?:any
}

export function Btn(props:botao){
    return(
        <Link to={props.link}>
			<button
				className={`
                ${props.classname}`}
                onClick={props.onClick}
                
            >
		            {props.texto}
			</button>
		</Link>
    )
}