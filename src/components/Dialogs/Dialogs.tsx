import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";

type DialogsPropsType = {
    name: string
    message: string
    id: number
}

// let dialogsElements = props.state.dialogsData.map(d => <Dialog name={d.name} id={d.id} sr={d.sr}/>);
// let messagesElements = props.state.messagesData.map(m => <Message text={m.text} touched={m.touched} id={m.id}/>);
// let newMessage = React.createRef();
// let sendMessage = () => {
//     let newText = newMessage.current.value
//     alert(newText)
// }





//props: DialogsPropsType
export function Dialogs() {
    let dialogDate = [
        {name:"Nikita", id:1},
        {name:"Jora", id:2},
        {name:"Polina", id:3},
        {name:"Ivan", id:4},
        {name:"Roma", id:5},
        {name:"Volodzzzia", id:6},
        {name:"Ilya", id:7},
    ];
    let messageData = [
        {name:"Nikita", message:"Hey", id:1},
        {name:"Jora", message:"Hoy", id:2},
        {name:"Polina", message:"Lets", id:3},
        {name:"Ivan", message:"go! Yes, lets go to kill a good people, comrrrrade!", id:4},
        {name:"Roma", message:"Oh no!", id:5},
        {name:"Volodzzzia", message:"Oh Yes!", id:6},
        {name:"Ilya", message:"Oh Yes!", id:7},
    ]
    let message = messageData.map( m =>  <Message name={m.name} message={m.message} id={m.id} />);
    let dialog = dialogDate.map( d => <Dialog name={d.name} id={d.id}/>);
    return (
        <div className={s.allContent}>
            <div className={s.newMessages}>New message:</div>
            <div className={s.newMessages}>
                {/*<textarea ref={newMessage}></textarea>*/}
                {/*<button onClick={sendMessage}>send</button>*/}
                <textarea ></textarea>
                <button >send</button>
            </div>
            <div className={s.friends}>
                {dialog}
                {/*<Dialog name={"Nikita"} id={1}/>*/}
                {/*<Dialog name={"Jora"} id={2}/>*/}
                {/*<Dialog name={"Polina"} id={3}/>*/}
                {/*<Dialog name={"Ivan"} id={4}/>*/}
                {/*<Dialog name={"Roma"} id={5}/>*/}
                {/*<Dialog name={"Volodzzzia"} id={6}/>*/}
                {/*<Dialog name={"Ilya"} id={7}/>*/}
            </div>
            <div className={s.messages}>
                {message}
                {/*<Message name={"Nikita"} message={"Hey"} id={1}/>*/}
                {/*<Message name={"Jora"} message={"Hoy"} id={2}/>*/}
                {/*<Message name={"Polina"} message={"Lets"} id={3}/>*/}
                {/*<Message name={"Ivan"} message={"go! Yes, lets go to kill a good people, comrrrrade!"} id={4}/>*/}
                {/*<Message name={"Roma"} message={"Oh no!"} id={5}/>*/}
                {/*<Message name={"Volodzzzia"} message={"Oh Yes!"} id={6}/>*/}
                {/*<Message name={"Ilya"} message={"Oh Yes!"} id={7}/>*/}

            </div>
        </div>
    )
}