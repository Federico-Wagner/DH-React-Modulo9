import React from "react";
import '../../assets/css/table.css'
import Row from './Row'
import Header from './header'

let dataMovies = [{
    titulo: "Billy Eliot",
    duracion:"123",
    rating:"5",
    genero:["Drama", "Comedia"],
    premios:"2"
},{
    titulo: "Alicia en el pais de las maravillas",
    duracion:"142",
    rating:"4.8",
    genero:["Drama", "Acción", "Comedia"],
    premios:"3"
}]

function Table(){
    return (
        <React.Fragment>
            <div className="table">
            <table>
                <Header></Header>
                {dataMovies.map((item, i)=>{
                    return(<Row key={i} movie={item}></Row>)
                })}
                <Header></Header>
            </table>
            </div>
        </React.Fragment>
    )
}

export default Table;
