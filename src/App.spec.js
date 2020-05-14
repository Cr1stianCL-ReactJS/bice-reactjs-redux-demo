import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Componente principal de React "App.js" testeado con Enzyme', () => {
	it('renderiza la app correctamente', () => {
		shallow(<App />);
	});
});
