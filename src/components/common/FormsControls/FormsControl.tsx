import React from "react";
import {WrappedFieldProps} from "redux-form";
import style from "./FormsControl.module.css"

export const FormControl: React.FC<WrappedFieldProps> =
    React.memo(({input, meta: {touched, error}, ...restProps}) => {
        return (
            <>
                <div className={`${style.fieldForm} ${touched && error ? style.error : ""}`}>
                    {restProps.children}
                </div>
                <div className={style.error}>
                    {touched && error && <span>{error}</span>}
                </div>
            </>
        )
    })


export const Textarea: React.FC<WrappedFieldProps> = React.memo((props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
})

export const Input: React.FC<WrappedFieldProps> = React.memo((props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
})


