import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/accordion";
import Rating from "./components/Rating";

function App() { //function declaration
    console.log("App is rendering")
    return (
        <div className="App">
            <PageTitle title={"This is App title"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={"Menu"} collapsed={false}/>
            Article 2
            <Rating value={5}/>
            <Rating value={5}/>
            <Rating value={3}/>
            <Rating value={2}/>
            <Accordion title={"second menu"} collapsed={true}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
