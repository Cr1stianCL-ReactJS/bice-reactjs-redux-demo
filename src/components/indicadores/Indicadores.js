import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { actions } from 'components/store/actions/indicadores.actions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Row, Col, Jumbotron, FormGroup, Spinner, Alert, Table } from 'react-bootstrap';
import './Indicadores.css';
import moment from 'moment/min/moment-with-locales';
import TablaIndicadores from './Tablas/TablaIndicadores';

export const Indicadores = (props) => {
	const { Cargando, SetearLoader, BusquedaIndicadoresSeleccion } = props;

	useEffect(() => {
		//-->renderiza al cargar la pagina
	});

	console.log('props', props);
	//--> fecha  de datetime picker
	const [ startDate, setStartDate ] = React.useState(new Date());

	//--checkbox de indicadores
	const [ cobre, setCobre ] = React.useState(false);
	const [ dolar, setDolar ] = React.useState(false);
	const [ euro, setEuro ] = React.useState(false);
	const [ ipc, setIpc ] = React.useState(true); // -->parte seleccionado siempre IPC
	const [ ivp, setIvp ] = React.useState(false);
	const [ oro, setOro ] = React.useState(false);
	const [ plata, setPlata ] = React.useState(false);
	const [ uf, setUf ] = React.useState(false);
	const [ yen, setYen ] = React.useState(false);
	const [ checkeados, setCheckeados ] = React.useState([ 'ipc' ]); // -->parte seleccionado siempre IPC

	//-->alertas
	const [ minimoAlerta, setMinimoAlerta ] = React.useState(true);

	const handleChange = (e) => {
		if (e.target.checked) {
			const checkbox = e.currentTarget.id;
			setCheckeados([ ...checkeados, checkbox ]);
		} else {
			const checkbox = e.currentTarget.id;
			const newCheckeados = checkeados.filter(function(e) {
				return e !== checkbox;
			});
			setCheckeados([ ...newCheckeados ]);
		}

		switch (e.currentTarget.id) {
			case 'cobre':
				setCobre(e.target.checked);
				break;
			case 'dolar':
				setDolar(e.target.checked);
				break;
			case 'euro':
				setEuro(e.target.checked);
				break;
			case 'ipc':
				setIpc(e.target.checked);
				break;
			case 'ivp':
				setIvp(e.target.checked);
				break;
			case 'oro':
				setOro(e.target.checked);
				break;
			case 'plata':
				setPlata(e.target.checked);
				break;
			case 'uf':
				setUf(e.target.checked);
				break;
			case 'yen':
				setYen(e.target.checked);
				break;
		}
	};

	const handleBusqueda = () => {
		const momentstartDate = moment(startDate).format('DD-MM-YYYY');
		const momentDate = moment(new Date()).format('DD-MM-YYYY');
		if (checkeados.length === 0) {
			setMinimoAlerta(false);
			setTimeout(() => {
				setMinimoAlerta(true);
			}, 5000);
		} else {
			SetearLoader(false);
			BusquedaIndicadoresSeleccion(checkeados, momentstartDate);

			setTimeout(() => {
				SetearLoader(true);
			}, 1500);
		}
	};

	return (
		<Container>
			<label className='labelIndicadores'>
				<strong>Seleccione Indicadores:</strong>
			</label>
			<Row className='col-sm-6 col-md-10 col-lg-12'>
				<Form.Group controlId='formBasicCheckbox'>
					<Form.Check
						id='cobre'
						type='checkbox'
						label='Cobre'
						className='styleCheckboxes'
						onChange={(e) => handleChange(e)}
						checked={cobre}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicCheckbox'>
					<Form.Check
						id='dolar'
						type='checkbox'
						label='Dolar'
						className='styleCheckboxes'
						onChange={(e) => handleChange(e)}
						checked={dolar}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicCheckbox'>
					<Form.Check
						id='euro'
						type='checkbox'
						label='Euro'
						className='styleCheckboxes'
						onChange={(e) => handleChange(e)}
						checked={euro}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicCheckbox'>
					<Form.Check
						id='ipc'
						type='checkbox'
						label='IPC'
						className='styleCheckboxes'
						onChange={(e) => handleChange(e)}
						checked={ipc}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicCheckbox'>
					<Form.Check
						id='ivp'
						type='checkbox'
						label='IVP'
						className='styleCheckboxes'
						onChange={(e) => handleChange(e)}
						checked={ivp}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicCheckbox'>
					<Form.Check
						id='oro'
						type='checkbox'
						label='Oro'
						className='styleCheckboxes'
						onChange={(e) => handleChange(e)}
						checked={oro}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicCheckbox'>
					<Form.Check
						id='plata'
						type='checkbox'
						label='Plata'
						className='styleCheckboxes'
						onChange={(e) => handleChange(e)}
						checked={plata}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicCheckbox'>
					<Form.Check
						id='uf'
						type='checkbox'
						label='UF'
						className='styleCheckboxes'
						onChange={(e) => handleChange(e)}
						checked={uf}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicCheckbox'>
					<Form.Check
						id='yen'
						type='checkbox'
						label='Yen'
						className='styleCheckboxes'
						onChange={(e) => handleChange(e)}
						checked={yen}
					/>
				</Form.Group>
			</Row>
			<Row className='col-sm-6 col-md-10 col-lg-12 offset-4 separator'>
				<Col>
					<FormGroup>
						<div className='input-group'>
							<DatePicker
								dateFormat='dd-MM-yyyy'
								locale='es'
								className='form-control datepicker'
								selected={startDate}
								onChange={(date) => setStartDate(date)}
							/>
							<Button
								className='input-group-append'
								variant='primary'
								type='submit'
								onClick={() => {
									handleBusqueda();
								}}
							>
								Buscar
							</Button>
							<Spinner animation='border' variant='primary' hidden={Cargando} />
						</div>
					</FormGroup>
				</Col>
			</Row>
			<Row className='col-sm-6 col-md-10 col-lg-10 col-lg-offset-1 text-center'>
				<Alert variant='warning' hidden={minimoAlerta} style={{ textAlign: 'center', width: 1400 }}>
					Ups!, debes selecionar como minimo un indicador para hacer la busqueda.
				</Alert>
			</Row>
			<TablaIndicadores />
		</Container>
	);
};
export default connect((state) => state.Indicadores, (dispatch) => bindActionCreators(actions, dispatch))(Indicadores);
