import React from "react";

type AccordionBodyPropsType = {
    collapsed: boolean
}

export function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody is rendering")

    if (props.collapsed === true) {
        return (
            <ul>
                <li>css</li>
                <li>HTML</li>
                <li>JS</li>
                <li>TS</li>
            </ul>)
    } else { return <></>
    }
}