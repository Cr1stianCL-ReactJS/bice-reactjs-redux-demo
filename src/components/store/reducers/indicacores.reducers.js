import * as Constants from '../constants/indicadores.constants';

//REDUCERS
const initialState = {
	Indicadores: [],
	Cargando: true
};

export default function(state = initialState, action) {
	state = state || initialState;
	switch (action.type) {
		case Constants.BUSQUEDA_FECHAS_SELECCION:
			return {
				...state,
				Indicadores: action.payload
			};
		case Constants.SETEAR_LOADER:
			return {
				...state,
				Cargando: action.payload
			};
		default:
			return state;
	}
}
