import {ActionTypes} from "./store";

export type SidebarReducerType = ReturnType<typeof sidebarReducer>

const initialSidebarState = {

}

export const sidebarReducer = (state:any = initialSidebarState, action:ActionTypes) => {
    return state
}