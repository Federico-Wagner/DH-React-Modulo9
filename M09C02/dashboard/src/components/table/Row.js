import React from "react";

function Row(props){
    return (
        <React.Fragment>
            <div className="row">
                <celd className="title" >{props.movie.titulo}</celd>
                <celd>{props.movie.duracion}</celd>
                <celd>{props.movie.rating}</celd>
                <celd>
                    <ul>
                        {props.movie.genero.map((element, i) => {
                            return(<li key={i+element}>{element}</li>)
                        })
                        }
                    </ul>
                </celd>
                <celd>{props.movie.premios}</celd>
            </div>
        </React.Fragment>
    )
}

export default Row;
