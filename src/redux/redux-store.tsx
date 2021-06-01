import {combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-Reducer";
import {sidebarReducer} from "./Sidebar-Reducer";
import {dialogsReducer} from "./Dialogs-Reducer";


let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>
//export type AppStateType = typeof rootReducer

export let store = createStore(rootReducer);
