
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Alerta = (props) => {
    const [visible, setVisible] = useState(props.visible);

    return (
        <div className={`alert alert-warning ${props.visible ? '' : 'd-none'}`} role="alert">
            "Hemos tenido un fallo"
        </div>
    );
};

Alerta.propTypes = {
    visible: PropTypes.bool,
    texto: PropTypes.string,

}

Alerta.defaultTypes = {
    visible:false,
    texto: 'Algo ha fallado'
}
