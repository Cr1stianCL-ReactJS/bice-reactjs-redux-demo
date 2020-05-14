import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer from './indicacores.reducers';
import * as type from 'components/store/constants/indicadores.constants';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const initialState = {
	Indicadores: [],
	Cargando: true
};

describe('Verifica Estado Inicial Reducer', () => {
	it('Retorna el estado inicial correctamente', () => {
		expect(reducer(undefined, {})).toEqual(initialState);
	});
});
