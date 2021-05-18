import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export type RerenderEntireTreeType = {}
export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    // store={store}
                    state={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                    // _state={store._state}
                    // addPostCallback={store.addPost}
                    // changeNewTextCallback={store.changeNewText}
                    // changeNewMessageCallback={store.newMessage}
                    // addMessageCallback={store.addMessage}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
rerenderEntireTree()
store.subscriber(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
