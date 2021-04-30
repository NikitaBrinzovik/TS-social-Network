import React from 'react';
import './App.css';
import {Nav} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StoreType} from "./redux/state";

export type AppPropsType = {
    store: StoreType
    // _state: RootStateType
    // addPostCallback: (postText: string) => void
    // changeNewTextCallback: (newText: string) => void
    // changeNewMessageCallback: (newText: string) => void
    // addMessageCallback: (postText: string) => void
}

const App: React.FC<AppPropsType>= (props) => {
    const state = props.store.getState();
    console.log("App is rendering")
    return (

        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>

                <Route path='/Profile'
                       render={(m) =>
                           <Profile profilePage={state.profilePage}
                                    addPostCallback={props.store.addPost.bind(props.store)}
                                    changeNewTextCallback={props.store.changeNewText.bind(props.store)}
                                    message={state.profilePage.messageForNewPost}
                           />}/>
                <Route path='/Dialogs'
                       render={(d) =>
                           <Dialogs dialogsPage={state.dialogsPage}
                                    addMessageCallback={props.store.addMessage.bind(props.store)}
                                    changeNewMessageCallback={props.store.newMessage.bind(props.store)}
                                    message={state.dialogsPage.messageForNewMessage}
                           />}/>
            </div>

        </div>

    );
}


export default App;
