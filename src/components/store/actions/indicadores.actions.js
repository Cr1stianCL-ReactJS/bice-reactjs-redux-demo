import * as constants from '../constants/indicadores.constants';
import axios from 'axios';

export const actions = {
	BusquedaIndicadoresSeleccion: (indicadores, fecha) => async (dispatch, getState) => {
		try {
			const valoresIndicadores = [];
			console.log('fecha', fecha);
			let promises = [];
			let i;
			for (i = 0; i < indicadores.length; i++) {
				let uri = `/date/${indicadores[i]}/${fecha}`;
				console.log(uri);
				promises.push(
					axios.get(uri).then((response) => {
						valoresIndicadores.push(response.data);
					})
				);
			}
			Promise.all(promises).then(() => console.log(valoresIndicadores));

			dispatch({
				type: constants.BUSQUEDA_FECHAS_SELECCION,
				payload: valoresIndicadores
			});
		} catch (error) {
			console.log('Error:', error);
		}
	},
	SetearLoader: (seteo) => async (dispatch, getState) => {
		dispatch({
			type: constants.SETEAR_LOADER,
			payload: seteo
		});
	}
};

/*
//ACTIONS
export const actions = {
	BusquedaIndicadoresSeleccion: (indicadores, fecha) => async (dispatch, getState) => {
		try {
			const valoresIndicadores = [];
			console.log('fecha', fecha);
			let promises = [];
			let i;
			for (i = 0; i < indicadores.length; i++) {
				let uri = `/date/${indicadores[i]}/${fecha}`;
				console.log(uri);
				promises.push(
					axios.get(uri).then((response) => {
						valoresIndicadores.push(response.data);
					})
				);
			}
			Promise.all(promises).then(() => console.log(valoresIndicadores));

			dispatch({
				type: constants.BUSQUEDA_FECHAS_SELECCION,
				payload: valoresIndicadores
			});
		} catch (error) {
			console.log('Error:', error);
		}
	},
	SetearLoader: (seteo) => async (dispatch, getState) => {
		dispatch({
			type: constants.SETEAR_LOADER,
			payload: seteo
		});
	}
};
*/
