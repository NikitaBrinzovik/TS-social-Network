import React, {ChangeEvent} from "react";
import {UST} from "../../../redux/Profile-Reducer";


type ProfileInfoPropsType = {
    status: string
    updateStatus: (status: string) => UST
}

export class ProfileStatus extends React.Component<ProfileInfoPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    /* handleFocus = (event: FocusEvent<HTMLInputElement>) => {//автовыделение содержимого инпута
         event.target.select();
     }
     switchEditMode = () => {
         this.setState({
             editMode: !this.state.editMode
         })
         //this.state.editMode = !this.state.editMode
         //this.forceUpdate()// пинаем Реакт на перерисовку. лучше не использовать этот метод
     }*/

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>

                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activeEditMode}>
                    {/*<span onDoubleClick={this.switchEditMode}>*/}
                        {this.props.status || "push me"}
                    </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input
                        //onDoubleClick={this.switchEditMode}
                        //onFocus={this.handleFocus} //автовыделение содержимого инпута

                        onChange={this.onStatusChange}
                        type="text"
                        value={this.state.status}
                        autoFocus={true}//при активации элемента фокус внутри textarea
                        onBlur={this.deactivatedEditMode}

                    />
                </div>
                }
            </div>
        )
    }
}