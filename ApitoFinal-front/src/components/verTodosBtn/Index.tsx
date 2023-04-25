import React from "react";
import { Link } from "react-router-dom";

interface btnProps{
    route: string
    classNome: string
}

export const VerTodosBtn = (props: btnProps) =>{
    return(
        <>
            <Link
                to={props.route}
            >
                <span className={props.classNome}>
                    Ver Todos
                </span>
            </Link>
        </>
    )
}

