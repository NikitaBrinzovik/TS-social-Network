import React from 'react';
import './App.css';
import {Nav} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionTypes, RootStateType, StoreType} from "./redux/state";

export type AppPropsType = {
    // store: StoreType
    dispatch:  (action: ActionTypes) => void
    state: RootStateType
    // _state: RootStateType
    // addPostCallback: (postText: string) => void
    // changeNewTextCallback: (newText: string) => void
    // changeNewMessageCallback: (newText: string) => void
    // addMessageCallback: (postText: string) => void
}

const App: React.FC<AppPropsType> = (props) => {
    // const state = props.store.getState();
    console.log("App is rendering")
    return (

        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>

                <Route path='/Profile'
                       render={(m) =>
                           <Profile
                               dispatch={props.dispatch}
                               profilePage={props.state.profilePage}
                               // addPostCallback={props.store.addPost.bind(props.store)}
                               // changeNewTextCallback={props.store.changeNewText.bind(props.store)}
                               message={props.state.profilePage.newPostText}
                           />}/>
                <Route path='/Dialogs'
                       render={(d) =>
                           <Dialogs
                               dialogsPage={props.state.dialogsPage}
                               dispatch={props.dispatch}
                               // addMessageCallback={props.store.addMessage.bind(props.store)}
                               // changeNewMessageCallback={props.store.newMessage.bind(props.store)}
                               message={props.state.dialogsPage.newMessageText}
                           />}/>
            </div>

        </div>

    );
}


export default App;
