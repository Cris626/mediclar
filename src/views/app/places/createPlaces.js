import React from 'react';
import { useForm } from 'react-hook-form';

import logoMediclar from '../../../img/logo.jpg'
import backgroundLogin from '../../../img/background-login.jpg'

import '../../../styles/addSite.css';

const CreatePlaces = props => {

    const{register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit = (data, e) => {
        let history = props.history;
        e.target.reset();
        props.loginAdmin({...data, history});
    }


    const handleNext=()=>{
        let {history} = props;
        history.push('/mediclar/app/places/register-successful')
    }

    return(
        <div className="container-primary-add">

            <div className="container-background-add">
                <img src={ backgroundLogin } alt="background"/>
            </div>

            <div className="overlay-header-add"></div>



            <div className="container-login-primary-add">

                <div align="center" className="container-logo">
                    <img className="logo-login" src={ logoMediclar } alt="logo"/>
                </div>

                
                <div className="container-login-add">

                    <form onSubmit={ handleSubmit( onSubmit ) }>
                    <p className="session-title">AGREGAR LUGARES DE ORIGEN</p>

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
                                placeholder="Agregar..."
                                {...register("name", {
                                    required:{
                                        value: true,
                                        message: 'Campo Requerido'
                                    }, 
                
                
                                })}
                            />
                        </div>

                        <div className="container-state-city-primary">
                            <div className="container-state-city">
                                <label
                                    htmlFor="Estado" 
                                    className="label-login-name"
                                >
                                    Estado
                                </label>
                                    <select
                                        name="Estado"
                                        className="select-state"
                                    >
                                        <option value="">Seleccionar</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>

                                    </select>
                            </div>

                            <div className="container-state-city">
                                <label
                                    htmlFor="Ciudad" 
                                    className="label-login-name"
                                >
                                    Ciudad
                                </label>
                                    <select
                                        name="Ciudad"
                                        className="select-city"
                                    >
                                        <option value="">Seleccionar</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>

                                    </select>
                            </div>
                        </div>




                        <div className="container-state-city-primary">
                            <div className="container-state-city">
                                <label
                                    htmlFor="Empresa/Hotel" 
                                    className="label-login-name"
                                >
                                    Empresa/Hotel
                                </label>
                                    <select
                                        name="Empresa/Hotel"
                                        className="select-state"
                                    >
                                        <option value="">Seleccionar</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>

                                    </select>
                            </div>

                            <div className="container-state-city">
                                <label
                                    htmlFor="Ciudad" 
                                    className="label-login-name"
                                >
                                    Ciudad
                                </label>
                                    <select
                                        name="Ciudad"
                                        className="select-city"
                                    >
                                        <option value="">Seleccionar</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>

                                    </select>
                            </div>
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
                            <button className="btn-login" onClick={()=> handleNext()}>ACEPTAR</button>
                        </div>

                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default CreatePlaces;