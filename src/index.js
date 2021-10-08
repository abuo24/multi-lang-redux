import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './index.css'
import {Provider} from "react-redux"
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/reducer";
// import {composeWithDevTools} from "redux-devtools-extension";
import promiseMiddleware from "redux-promise"

const store = applyMiddleware(promiseMiddleware)(createStore);
ReactDOM.render(
    <Provider store={store(rootReducer)}>
        <BrowserRouter>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
