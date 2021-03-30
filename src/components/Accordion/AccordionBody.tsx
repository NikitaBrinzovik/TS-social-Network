import React from "react";

type AccordionBodyPropsType = {
    collapsed: boolean
}

export function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody is rendering")

    if (props.collapsed === true) {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>)
    } else { return <></>
    }
}