import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App
                    state={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
