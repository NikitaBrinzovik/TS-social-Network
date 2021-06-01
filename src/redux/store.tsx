import {
    addPostActionCreator,
    newTextChangeHandleActionCreator,
    ProfilePageType,
    profileReducer
} from "./Profile-Reducer";
import {
    DialogsPageType,
    dialogsReducer,
    newTextChangeHandlerActionCreator,
    sendMessageActionCreator
} from "./Dialogs-Reducer";
import {sidebarReducer} from "./Sidebar-Reducer";

export type SidebarType = {}
export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    rerenderTree: (state: RootStateType) => void
    subscriber: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof newTextChangeHandleActionCreator> |
    ReturnType<typeof sendMessageActionCreator> |
    ReturnType<typeof newTextChangeHandlerActionCreator>


export let store: StoreType = {
    _state: {

        profilePage: {
            newPostText: "",

            posts: [
                {message: 'Hey-Hey', likes: 3, id: 1},
                {message: 'Hey-Hoy', likes: 5, id: 2}
            ]
        },
        dialogsPage: {
            newMessageText: "",

            messages: [
                {name: "Nikita", message: "Hey", id: 1},
                {name: "Jora", message: "Hoy", id: 2},
                {name: "Polina", message: "Lets", id: 3},
                {name: "Ivan", message: "go! Yes, lets go to kill a good people, comrrrrade!", id: 4},
                {name: "Roma", message: "Oh no!", id: 5},
                {name: "Volodzzzia", message: "Oh Yes!", id: 6},
                {name: "Ilya", message: "Oh Yes!", id: 7},],
            dialogs: [
                {name: "Nikita", id: 1},
                {name: "Jora", id: 2},
                {name: "Polina", id: 3},
                {name: "Ivan", id: 4},
                {name: "Roma", id: 5},
                {name: "Volodzzzia", id: 6},
                {name: "Ilya", id: 7},
            ],
        },
        sidebar: {},
    },

    getState() {return this._state},
    subscriber(observer) {this.rerenderTree = observer},
    rerenderTree(state: RootStateType) {console.log('jjjj')},

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this.rerenderTree(this._state)
    }

}

