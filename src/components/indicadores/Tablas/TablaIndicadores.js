import { Container, Row, Col, Jumbotron, FormGroup, Spinner, Alert, Table } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { actions } from 'components/store/actions/indicadores.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export const TablaIndicadores = (props) => {
	return (
		<Row className='col-sm-6 col-md-10 col-lg-12 separator'>
			<Table bordered>
				<thead>
					<tr>
						<th>#</th>
						<th>Nombre</th>
						<th>Descripción</th>
						<th>Unidad</th>
						<th>Valor</th>
					</tr>
				</thead>
				<tbody>
					{props.Indicadores.map((rowData, index) => (
						<tr key={rowData.key}>
							<th scope='row'>{index + 1}</th>
							<td>{rowData.key}</td>
							<td>{rowData.name}</td>
							<td>{rowData.unit}</td>
							<td>{rowData.value ? rowData.value : 'Api No lo Trae(NULL)'}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Row>
	);
};

export default connect((state) => state.Indicadores, (dispatch) => bindActionCreators(actions, dispatch))(
	TablaIndicadores
);
