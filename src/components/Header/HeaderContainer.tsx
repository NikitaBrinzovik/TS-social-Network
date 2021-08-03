import React from "react";
import {Header} from "./Header";
import {DataStateType, setAuthUsersData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {authAPI} from "../../api/api";


type MSTPType = {
    isAuth: boolean
    login: string
}

class HeaderContainer extends React.Component<any, { setAuthUsersData: (data: DataStateType) => void }, MSTPType> { //без any не пашет
    componentDidMount() {
        /*axios.get<GetStateType>(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                withCredentials: true //разрешить кроссплатформенные запрорсы
            })*/
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) { //только если прошли проверку
                let {id, login, email} = response.data.data;
                //this.props.setAuthUsersData(response.data.data.login);//одна дата- из axios,  вторая из бека(документация-логин, имаил, юзерID
                this.props.setAuthUsersData({id, login, email});
            }
        })
    }

    render() {
        return <Header
            //{...this.props}
            isAuth={this.props.isAuth}
            login={this.props.login}
        />;
    }
}

const mapStateToProps = (state: MSTPType) => {//не работает- ошибки б..т!
   /* isAuth: state.auth.isAuth;
    login: state.auth.login;*/
}
export default connect(mapStateToProps, {setAuthUsersData})(HeaderContainer)