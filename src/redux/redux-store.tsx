import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-Reducer";
import {sidebarReducer} from "./Sidebar-Reducer";
import {dialogsReducer} from "./Dialogs-Reducer";
import {usersReducer} from "./Users-Reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {composeWithDevTools} from "redux-devtools-extension";


let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));


// @ts-ignore
window.store = store;
