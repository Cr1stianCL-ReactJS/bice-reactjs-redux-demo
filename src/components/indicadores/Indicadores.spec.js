import React from 'react';
import { shallow, render } from 'enzyme';
import Indicadores from './Indicadores';
import App from 'App';
import TablaIndicadores from 'components/indicadores/Tablas/TablaIndicadores';
import PropTypes from 'prop-types';
import Provider from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

let wrapperApp, wrapperIndicadores;
beforeEach(() => (wrapperApp = shallow(<App />)));

describe('Verifica Componente Indicadores', () => {
	it('Deberia renderizar Componente Indicadores', () => {
		expect(wrapperApp.containsMatchingElement(<Indicadores />)).toEqual(true);
	});
});
