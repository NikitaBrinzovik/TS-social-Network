import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";


type MSTPFRType = {
    isAuth: boolean
}
let mapStateToPropsForRedirect = (state: AppStateType): MSTPFRType => ({
    isAuth: state.auth.isAuth
})
export function WithAuthRedirect<T>(Component: ComponentType<T>)  {

    const RedirectComponent = (props: MSTPFRType) => {

        let {isAuth, ...restProps} = props

        if (!props.isAuth) return <Redirect to={"/Login"}/>//у Валеры без ".props" странноооо
        return <Component  {...restProps as T}/>/*все пропсы кидаем дальше*/
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}