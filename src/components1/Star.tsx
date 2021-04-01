import React from "react";

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b>star</b> </span>;
    } else {
        return <span>star </span>;
    }
    console.log("Star is rendering")

}

export default Star;
