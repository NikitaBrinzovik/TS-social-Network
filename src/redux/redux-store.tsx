import {combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-Reducer";
import {sidebarReducer} from "./Sidebar-Reducer";
import {dialogsReducer} from "./Dialogs-Reducer";
import {usersReducer} from "./Users-Reducer";
import {authReducer} from "./auth-reducer";


let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth:authReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);


// @ts-ignore
window.store = store;
