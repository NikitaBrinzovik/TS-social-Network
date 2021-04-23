import {addMessage, addPost, changeNewText, newMessage, RootStateType} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
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