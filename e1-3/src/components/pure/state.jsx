import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';

const  ComponenteB = ({ estado }) => {
    const [conectado,setConectado] = useState(estado);
	return (
		<div>
            <h3>
                {conectado === false ? 'Contacto no disponible' : 'Contacto en linea'}
            </h3>
            <button onClick={()=> setConectado(!conectado)}>{conectado === false ? 'Conectado' : 'Desconectado'}</button>
		</div>
	);
};

ComponenteB.propTypes = {
	estado:PropTypes.bool,
};

export default ComponenteB;

