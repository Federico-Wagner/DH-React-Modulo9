import React from "react";
//título, cifra, color de borde, ícono
import PropTypes from 'prop-types'

function Metric(props){
    Metric.defaultValues = {
        titulo: "categoria",
        cifra: 10,
        colorDeBorde: "card border-left-primary shadow h-100 py-2",
        icono:"fas fa-film fa-2x text-gray-300"
    }
    Metric.propTypes = {
        titulo: [PropTypes.string, PropTypes.func.isRequired],
        cifra: [PropTypes.number, PropTypes.func.isRequired],
        colorDeBorde: [PropTypes.string, PropTypes.func.isRequired],
        icono: [PropTypes.string, PropTypes.oneOf(['border-left-primary', 'border-left-successo', 'border-left-warning']), PropTypes.func.isRequired],
    }

    return(
        <React.Fragment>
            <div className="col-md-4 mb-4">
                <div className={props.colorDeBorde}>
                    <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.titulo}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
                        </div>
                        <div className="col-auto">
                        <i className={props.icono}></i>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Metric;
