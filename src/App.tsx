import React from 'react';
import './App.css';
import {Nav} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Route} from "react-router-dom";
import {ActionTypes, RootStateType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/Dialogs-Container";
import UsersContainer from './components/Users/Users-Container';


export type AppPropsType = {
    dispatch: (action: ActionTypes) => void
    state: RootStateType
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>

                <Route
                    path='/Profile'
                    render={(m) =>
                        <Profile/>}
                />
                <Route
                    path='/Dialogs'
                    render={(d) =>
                        <DialogsContainer/>}
                />
                <Route
                    path='/Users'
                    render={() => <UsersContainer/>}

                />
            </div>
        </div>
    );
}


export default App;
