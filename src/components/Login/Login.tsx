import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from '../common/FormsControls/FormsControl';
import {requiredField} from "../../utils/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
//сама форма
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} type="text" placeholder={"Login"} name={"login"}
                       validate={[requiredField]}
                />
            </div>
            <div>
                <Field component={Input} type="text" placeholder={"Password"} name={"password"}
                       validate={[requiredField]}
                />
            </div>
            <div>
                <Field component={Input} type={"checkbox"} name={"rememberMe"} /> remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

//оборачиваем в контейнерную (специальную, подобие НОС)
const LoginReduxForm = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)

//Рисуем компоненту(форму)
export const Login = () => {
    const onSubmit = (data: FormDataType) => {
        console.log(data)
    }

    return <>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
}


