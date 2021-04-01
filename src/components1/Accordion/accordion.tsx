import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {

    console.log("Accordion is rendering")
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody collapsed={props.collapsed}/>
        </div>
    );
}

export default Accordion;