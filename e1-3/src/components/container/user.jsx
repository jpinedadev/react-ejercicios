import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';
import ComponenteB from '../pure/state';

function componenteA({contacto}) {

	return (
		<div>
			<h2>Nombre: {contacto.nombre}</h2>
            <h3>Apellido: {contacto.apellido}</h3>
            <h3>Email: {contacto.email}</h3>
            <ComponenteB estado={true}></ComponenteB>
		</div>
	);
};

componenteA.propTypes={
    contacto:PropTypes.instanceOf(Contact),
}

export default componenteA;
