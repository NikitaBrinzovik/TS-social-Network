import React from "react";
import {Header} from "./Header";
import {getAuthUsersData} from "../../redux/auth-reducer";
import {connect} from "react-redux";


type MSTPType = {
    isAuth: boolean
    login: string
}
type HeaderContainerPropsType = {
    //setAuthUsersData: (data: DataStateType) => void
    getAuthUsersData: () => void
}
type HeaderContainerType = MSTPType & HeaderContainerPropsType//{ setAuthUsersData: (data: DataStateType) => void }
class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.getAuthUsersData();
    }

    render() {
        return <Header

            isAuth={this.props.isAuth}
            login={this.props.login}
        />;
    }
}

const mapStateToProps = (state: MSTPType) => ({
    isAuth: state.isAuth,
    login: state.login,
})
export default connect(mapStateToProps, {getAuthUsersData})(HeaderContainer)