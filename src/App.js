import React from 'react';
import './App.css';
import Indicadores from './components/indicadores/Indicadores';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Tabs, Tab, Jumbotron } from 'react-bootstrap';

function App() {
	return (
		<div className='App'>
			<Container>
				<Jumbotron>
					<h1>INDICADORES ECONOMICOS</h1>
					<p>
						Una pequeña aplicacion web, construida en react que consume, el api de{' '}
						<a href={'https://www.indecon.online'}>indecon</a>
					</p>
				</Jumbotron>
				<Row className='col-md-12'>
					<Tabs defaultActiveKey='Buscador' id='uncontrolled-tab-example'>
						<Tab eventKey='Buscador' title='Buscador'>
							<Indicadores />
						</Tab>
						{/* <Tab eventKey='profile' title='Graficas' />*/}
					</Tabs>
				</Row>
			</Container>
		</div>
	);
}

export default App;
