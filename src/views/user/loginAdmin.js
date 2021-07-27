import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

import logoMediclar from '../../img/logo.jpg'
import backgroundLogin from '../../img/background-login.jpg'
import preloader from '../../img/loader.gif'

import { connect } from 'react-redux';
import { loginAdmin } from '../../redux/actions';

import IntlMessages from '../../helpers/IntlMessages';

import '../../styles/login.css';

const LoginAdmin = props => {
    // const [email, setEmail] = useState("admin@mail.com");
    // const [password, setPassword] = useState("1234");
    const [loader, setLoader] = useState(false);

    const{register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit = (data, e) => {
        setLoader(true);
        e.target.reset();
        props.loginAdmin({...data});
    }

    const handleLogin=(value)=>{
        const { status } = value;
        if(status===200){
            const { token } = value;
            const { history } = props;
            localStorage.setItem("Authorization", token);
            setLoader(false)
            history.push('/mediclar/app/form-main');
        }else if(status===404){
            setLoader(false)
            return console.log("Email o contraseña incorrectos")
        }
    }

    useEffect(()=>{
        handleLogin(props.authUser);
    }, [props])

    return(

        <div className="container-primary">

            <div className="container-background">
                <img className="background-login" src={ backgroundLogin } alt="background"/>
            </div>

            <div className="overlay-header"></div>



            <div className="container-login-primary">

                <div align="center" className="container-logo">
                    <img className="logo-login" src={ logoMediclar } alt="logo"/>
                </div>

                
                <div className="container-login">

                    <form onSubmit={ handleSubmit( onSubmit ) }>
                    <p className="session-title">INICIAR SESIÓN</p>
                        <div className="container-mail">

                            <label
                                htmlFor="email" 
                                className="label-login-mail"
                            >
                                Correo electrónico
                            </label>

                            <input
                                type="text"
                                name="email"
                                autoComplete="off"
                                className="input-login"
                                {...register("email", {
                                    required:{
                                        value: true,
                                        message: 'Campo Requerido'
                                    }, 

                                    maxLength:{
                                        value: 18,
                                        message: 'Maximo 18 Caracteres'
                                    },
                
                                    minLength:{
                                        value: 2,
                                        message: 'Minimo 2 Caracteres'
                                    },
                                    
                                    pattern:{
                                        value: /^\S+@\S+$/i,
                                        message: 'Error, Ingresa un correo valido.'
                                    }
                
                                })}
                            />
                            <FontAwesomeIcon className="iconMail" icon={ faEnvelope }/>
                        
                        </div>

                        
                        <div className="container-password">

                            <label
                                htmlFor="password" 
                                className="label-login-password"
                            >
                                Contraseña
                            </label>

                            <input
                                type="password"
                                name="password"
                                autoComplete="off"
                                className="input-login"
                                {...register("password", {
                                    required:{
                                        value: true,
                                        message: 'Campo Requerido'
                                    }, 

                                    maxLength:{
                                        value: 15,
                                        message: 'Maximo 15 Caracteres'
                                    },
                
                                    minLength:{
                                        value: 3,
                                        message: 'Minimo 3 Caracteres'
                                    },
                
                                })}
                            />
                            <FontAwesomeIcon className="iconPass" icon={ faLock }/>
                        </div>

                        <span className="">
                            {errors.name && errors.name.message}
                        </span>

                        <span className="">
                            {errors.email && errors.email.message}
                        </span>

                        <span className="">
                            {errors.password && errors.password.message}
                        </span>



                        <div className="container-btn">
                            {!loader?<button className="btn-login">LOGIN</button>:<img src={ preloader } style={{width: "20px"}} alt="preloader" />}
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = ({authUser}) => {
    return { authUser };
};

const mapDispatchToProps = dispatch => ({
    loginAdmin: value => dispatch(loginAdmin(value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginAdmin);