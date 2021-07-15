import React from 'react';
import './App.css';
import {Nav} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {RootStateType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/Dialogs-Container";
import UsersContainer from './components/Users/UsersContainer';
import {ActionTypes} from "./redux/Dialogs-Reducer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


export type AppPropsType = {
    dispatch: (action: ActionTypes) => void
    state: RootStateType
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Nav/>
            <div className='app-wrapper-content'>

                <Route
                    path='/Profile/:userID?'//после двоеточ указали, что есть парамметры. консоль: path. можно ещё параметры через ещё раз двоеточие
                    //знак ? обозначает опциональность парам-ра. если нет парм, то отобразится наш проф
                    render={(m) =>
                        <ProfileContainer/>}
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
