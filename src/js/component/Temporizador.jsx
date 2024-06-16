import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


export const Temporizador = (props) => {   
    
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="contador bg-dark d-flex justify-content-center mt-5 w-50 display-1">
                    <div className="bg-light">{props.centenasDeMil % 10}</div>
                    <div className="bg-light">{props.decenasDeMil % 10}</div>
                    <div className="bg-light">{props.unidadesDeMil % 10}</div>
                    <div className="bg-light">{props.centenas % 10}</div>
                    <div className="bg-light">{props.decenas % 10}</div>
                    <div id="unidades" className="bg-light">{props.unidades % 10}</div>
                </div>
            </div>
        </div>
    );
};


//PropTpes del temporizador
Temporizador.propTypes = {
    unidades: PropTypes.number,
    decenas: PropTypes.number,
    centenas: PropTypes.number,
    unidadesDeMil: PropTypes.number,
    decenasDeMil: PropTypes.number,
    centenasDeMil: PropTypes.number
};

//PropTpes del temporizador por defecto
Temporizador.defaultProps = {
    unidades: 0,
    decenas: 0,
    centenas: 0,
    unidadesDeMil: 0,
    decenasDeMil: 0,
    centenasDeMil: 0
};
let counter = 0
setInterval(() => {
    const centenasDeMilContador = Math.floor(counter/100000);
    const decenasDeMilContador = Math.floor(counter/10000);
    const unidadesDeMilContador = Math.floor(counter/1000);
    const centenasContador = Math.floor(counter/100);
    const decenasContador = Math.floor(counter/10);
    const unidadesContador = Math.floor(counter/1);
    counter++;
    ReactDOM.render(<Temporizador unidades={unidadesContador} decenas={decenasContador}
    centenas={centenasContador} unidadesDeMil={unidadesDeMilContador} decenasDeMil={decenasDeMilContador} centenasDeMil={centenasDeMilContador}
    />, document.querySelector("#app"));
}, 1000);


