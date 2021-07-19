import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

import logoMediclar from '../../img/logo.jpg'
import backgroundLogin from '../../img/background-login.jpg'

import { connect } from 'react-redux';
import { loginAdmin } from '../../redux/actions';

import '../../styles/login.css';

const Login = props => {
    const [data, setData] = useState({
        user: '',
        password: ''
    });

    const{register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit = (data, e) => {
        let history = props.history;
        e.target.reset();
        props.loginAdmin({...data, history});
    }

    return(

        <div className="container-primary-login">

            <div className="container-background-login">
                <img className="background-login" src={ backgroundLogin } alt="background"/>
            </div>

            <div className="overlay-header-login"></div>



            <div className="container-primary-login">

                <div align="center" className="container-logo-login">
                    <img className="logo-login" src={ logoMediclar } alt="logo"/>
                </div>

                
                <div className="container-login">

                    <form onSubmit={ handleSubmit( onSubmit ) }>
                    <p className="session-title">INICIAR SESIÓN</p>

                        <div className="container-name">

                            <label
                                htmlFor="name" 
                                className="label-login-name"
                            >
                                Nombre
                            </label>

                            <input
                                type="text"
                                name="name"
                                autoComplete="off"
                                className="input-login"

                                {...register("name", {
                                    required:{
                                        value: true,
                                        message: 'Campo Requerido'
                                    }, 

                                    maxLength:{
                                        value: 15,
                                        message: 'Maximo 15 Caracteres'
                                    },
                
                                    minLength:{
                                        value: 2,
                                        message: 'Minimo 2 Caracteres'
                                    },
                
                                    pattern:{
                                        value: /^[A-Za-z]+$/i,
                                        message: 'Error, Espacio solo para ingresar texto.'
                                    }
                
                                })}
                            />
                            <FontAwesomeIcon className="iconUser" icon={ faUser }/>
                        </div>



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
                                        value: 5,
                                        message: 'Minimo 5 Caracteres'
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
                            <button className="btn-login">LOGIN</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = ({authUser}) => {
    return authUser;
};

const mapDispatchToProps = dispatch => ({
    loginAdmin: value => dispatch(loginAdmin(value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);