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

    // const handleInputChange = event => {
    //     setData({
    //         ...data,
    //         [event.target.name] : event.target.value
    //     })
    // }
    
    // const handleSession = event => {
    //     let history = props.history;
    //     event.preventDefault();
    //     props.loginAdmin({...data, history});
    // }






    const{register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit = (data, e) => {
        e.target.reset()
        console.log(data)
    }






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
                                htmlFor="mail" 
                                className="label-login-mail"
                            >
                                Correo
                            </label>

                            <input
                                type="text"
                                name="mail"
                                autoComplete="off"
                                className="input-login"

                                {...register("mail", {
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
                            {errors.mail && errors.mail.message}
                        </span>

                        <span className="">
                            {errors.password && errors.password.message}
                        </span>



                        <div className="container-btn">
                            <button className="btn-login">Login</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>






        // <div>
        //     <form onSubmit={handleSession}>
        //         <p>Usuario:</p>
        //         <input type="text" name="user" placeholder="Ingresar usuario" onChange={handleInputChange}/>
        //         <p>Contraseña</p>
        //         <input type="pass" name="password" placeholder="Ingresar contraseña" onChange={handleInputChange}/>
        //         <input 
        //             type="submit" 
        //             value="Ingresar"
        //         />
        //     </form>
        // </div>
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