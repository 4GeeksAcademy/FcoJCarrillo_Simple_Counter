import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Alerta } from "./Alerta";

/*
RETOS

Crear una opción de cuenta regresiva a partir de un número dado. HECHO
Crear funciones de parar, reiniciar y resumir el contador. REINCIAR HECHO, resumir esta resumido xd comparando con la primera versión(), parar en proceso...(como lo hago, sigo pensando como hacerlo)
Crear una alerta cuando el usuario llega a un tiempo específico, es decir, el usuario ingresa "10", y una alerta debería mostrarse notificando al usuario que se alcanzó su tiempo. TODAVIA SIN HACER, no sé como hacerlo

error-->Warning: Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of Temporizador.
Temporizador@https://fictional-carnival-rjx7j94x7qvcxvww-3000.app.github.dev/bundle.js:302:66 fictional-carnival-rjx7j94x7qvcxvww-3000.app.github.dev:12714:25
https://stackoverflow.com/questions/64903139/warning-render-methods-should-be-a-pure-function-of-props-and-state-triggering--> tiene que ser por la cfunciíon


AYUDAS
useref-->https://es.react.dev/reference/react/useRef
useEffect-->https://react.dev/reference/react/useEffect
*/


export const Temporizador = (props) => {
    let fallo = false;
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const internalRef = useRef(null);
    const [contador, setContador] = useState(0);


    const iniciarIntervalo = (tipo, numContador) => {
        clearInterval(internalRef.current);
        setContador(numContador);
        internalRef.current = setInterval(() => {
            setContador(contar => {
                const siguienteContador = tipo ? contar - 1 : contar + 1;
                usarContador(siguienteContador);
                return siguienteContador;
            });
        }, 1000);
    };


    const usarContador = (repeticiones) => {
        console.log("llamada"+repeticiones);
        const centenasDeMilContador = Math.floor(repeticiones / 100000);
        const decenasDeMilContador = Math.floor(repeticiones / 10000);
        const unidadesDeMilContador = Math.floor(repeticiones / 1000);
        const centenasContador = Math.floor(repeticiones / 100);
        const decenasContador = Math.floor(repeticiones / 10);
        const unidadesContador = Math.floor(repeticiones % 10);
        ReactDOM.render(
            <Temporizador
                unidades={unidadesContador}
                decenas={decenasContador}
                centenas={centenasContador}
                unidadesDeMil={unidadesDeMilContador}
                decenasDeMil={decenasDeMilContador}
                centenasDeMil={centenasDeMilContador}
            />,
            document.querySelector("#app")
        );
    };
    const cuentaRegresiva = () => {
        let valor = document.getElementById('cuentaAtras').value;
        let valorNumerico = 0;
        console.log(typeof (valor))
        if (isNaN(valor) || valor.trim() === '') {
            setMostrarAlerta(true);
        } else {
            if (valor.length <= 6) {
                valorNumerico = parseInt(valor);
                iniciarIntervalo(true, valorNumerico);
            } else {
                setMostrarAlerta(true);
            }
        }

    };
    const cuentaAscendente = () => {
        iniciarIntervalo(false, 0);
    };
    const reinciar = () => {
        clearInterval(internalRef.current);
        setContador(0);
        usarContador(0);
    }
    const parar = () => {

    }
    useEffect(() => {
        if (mostrarAlerta) {
            const timer = setTimeout(() => {
                setMostrarAlerta(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [mostrarAlerta]);

    return (
        <div className="container-fluid">
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
            <div className="row mt-3 d-flex">
                <div className="mt-3 mb-3">
                    <span className="col-md-2">Ponga una cuenta regresiva</span>
                    <input id="cuentaAtras" className="col-md-2" type="number" placeholder="Ponga un número para hacer la cuenta atrás"></input>
                    <button type="button" onClick={cuentaRegresiva} className="btn btn-success col-md-2">Cuenta Regresiva</button>

                </div>
            </div>
            <div className="row mt-3 d-flex">
                <div className="mt-3 mb-3">
                    <span className="col-md-2">Marque sus objetivos</span>
                    <input id="objetivo" className="col-md-2" type="number" placeholder="Ponga sus objetivos"></input>
                    <button type="button" onClick={cuentaAscendente} className="btn btn-success">Cuenta Ascendente</button>
                </div>
            </div>
            <div className="row mt-3 d-flex justify-content-center">
                <button type="button" onClick={cuentaRegresiva} className="btn btn-success col-md-2">Objetivos</button>
                <button type="button" onClick={cuentaAscendente} className="btn btn-success">Cuenta Ascendente</button>
                <button type="button" onClick={reinciar} className="btn btn-success">Reinciar</button>
                <Alerta visible={mostrarAlerta} texto="No es un número válido" />
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


