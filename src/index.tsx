import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {addMessage, addPost, changeNewText, newMessage, RootStateType, state, subscriber} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export type RerenderEntireTreeType = {}
export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPostCallback={addPost}
                    changeNewTextCallback={changeNewText}
                    changeNewMessageCallback={newMessage}
                    addMessageCallback={addMessage}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
rerenderEntireTree(state)
subscriber(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
