import React from 'react';
import './App.css';
import Accordion from "./components1/Accordion/accordion";
import Rating from "./components1/Rating";
import {Nav} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

type AppPropsType = {
    numb: number
    message: string
}
function App() { //function declaration
    console.log("App is rendering")
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>

                    <Route path='/Profile' render={() => <Profile />}/>
                    <Route path='/Dialogs' render={() => <Dialogs />}/>
                </div>

                {/*<PageTitle title={"This is App title"}/>*/}
                {/*/!*<Header />*!/*/}
                {/*<PageTitle title={"My friends"}/>*/}
                {/*Article 1*/}
                {/*<Rating value={3}/>*/}
                {/*<Accordion title={"Menu"} collapsed={false}/>*/}
                {/*Article 2*/}
                {/*<Rating value={5}/>*/}
                {/*<Rating value={5}/>*/}
                {/*<Rating value={3}/>*/}
                {/*<Rating value={2}/>*/}
                {/*<Accordion title={"second menu"} collapsed={true}/>*/}
            </div>
        </BrowserRouter>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
