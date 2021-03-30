import React from "react";

type AccordionTitlePropsType = {
    title: string
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle is rendering")
    return <h3>{props.title}</h3>
}