import {combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-Reducer";
import {sidebarReducer} from "./Sidebar-Reducer";
import {dialogsReducer} from "./Dialogs-Reducer";
import {usersReducer} from "./Users-Reducer";


let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);


// @ts-ignore
window.store = store;
