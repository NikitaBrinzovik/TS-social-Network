import s from "./ProfileInfo.module.css"
import React from "react";
import {FocusEvent} from 'react'


type ProfileInfoPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileInfoPropsType> {

    state = {
        editMode: false,
        title: "Yo"

    }

    handleFocus = (event: FocusEvent<HTMLInputElement>) => {//автовыделение содержимого инпута
        event.target.select();
    }

    switchEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        //this.state.editMode = !this.state.editMode
        //this.forceUpdate()// пинаем Реакт на перерисовку. лучше не использовать этот метод
    }

    render() {
        return (
            <div>

                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.switchEditMode}>
                        {this.props.status}
                    </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input type="text"
                           placeholder={this.props.status}
                        //onDoubleClick={this.switchEditMode.bind(this)}
                           autoFocus={true}//при активации элемента фокус внутри textarea
                           onFocus={this.handleFocus} //автовыделение содержимого инпута
                           onBlur={this.switchEditMode}
                    />
                </div>
                }
            </div>
        )
    }
}