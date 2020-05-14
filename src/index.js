import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import indicadoresState from './components/store/reducers/indicacores.reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
	Indicadores: indicadoresState
});
const initialState = window.initialReduxState;
const store = createStore(rootReducers, initialState, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
