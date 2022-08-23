import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../FormsControls/FormControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/authReducer';
import {AppStateType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} type={'password'} name={'password'} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={'input'}/>remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);


type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)