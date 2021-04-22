import React from 'react';
import './App.css';
import {Nav} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ProfilePageType, state, stateType} from "./redux/state";

export type AppPropsType = {
    // messageData: Array<MessDataType>
    // dialogData: Array<DialogDataType>
    // postData: Array<PostDataType>
    state:stateType
    //profilePage: Array<ProfilePageType>
}


function App(props:AppPropsType) { //function declaration
    //const dialogs ={}
    //console.log(state)

    console.log("App is rendering")
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav />
                <div className='app-wrapper-content'>

                    <Route path='/Profile'
                           render={(m) =>
                               <Profile profilePage={props.state.profilePage}/>}/>
                    <Route path='/Dialogs'
                           render={(d) =>
                               <Dialogs dialogsPage={props.state.dialogsPage} />}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
