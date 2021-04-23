import React from 'react';
import './App.css';
import {Nav} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {state, RootStateType} from "./redux/state";

export type AppPropsType = {
    state: RootStateType
    addPostCallback: (postText: string) => void
    changeNewTextCallback: (newText: string) => void
    changeNewMessageCallback: (newText: string) => void
    addMessageCallback: (postText: string) => void
}

function App(props: AppPropsType) { //function declaration

    console.log("App is rendering")
    return (

        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>

                <Route path='/Profile'
                       render={(m) =>
                           <Profile profilePage={props.state.profilePage}
                                    addPostCallback={props.addPostCallback}
                                    changeNewTextCallback={props.changeNewTextCallback}
                                    message={state.profilePage.messageForNewPost}
                           />}/>
                <Route path='/Dialogs'
                       render={(d) =>
                           <Dialogs dialogsPage={state.dialogsPage}
                                    addMessageCallback={props.addMessageCallback}
                                    changeNewMessageCallback={props.changeNewMessageCallback}
                                    message={props.state.dialogsPage.messageForNewMessage}
                           />}/>
            </div>

        </div>

    );
}


export default App;
