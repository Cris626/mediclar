import React, { useState , useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { getStates } from '../../../redux/actions';
import SelectStates from '../../../helpers/selectState';
import Select from 'react-select';

import logoMediclar from '../../../img/logo.jpg'
import backgroundLogin from '../../../img/background-login.jpg'

import '../../../styles/addSite.css';

const CreatePlaces = props => {
    const [states, setStates] = useState();
    const [selectState, setSelectState] = useState();
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [municipio, setMunicipio] = useState();
    
    const{register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit = (data, e) => {
        let history = props.history;
        e.target.reset();
        props.loginAdmin({...data, history});
    }

    const handleGetStates = async () => {
        let resulStates = [];
        let data = props.getStates();
        let promise = await Promise.resolve(data);
        await promise.payload.map(x=>{
            resulStates.push({ label: x.estado, value: x.id, key: x.id })
        })
        setSelectState(resulStates)
        setStates(promise.payload)
    }

    const selectCity = async (id) => {
        setMunicipio("")
        let data = states;
        let resulData = [];
        await data.map(x=>{
            if(x.id===id){
                x.municipios.map(y=>{
                    resulData.push({ label: y.municipio, value: y.id, key: y.id})
                })
            }
        })
        setCity(resulData);
    }

    useEffect(()=> {
        handleGetStates();
    }, [])


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
                                <Select
                                    className="select-state-add"
                                    placeholder="Seleccionar"
                                    name="Estado"
                                    options={selectState}
                                    value={state}
                                    onChange={value=>selectCity(value.value)}
                                />
                            </div>


                            <div className="container-state-city">
                                <label
                                    htmlFor="Ciudad" 
                                    className="label-login-name"
                                >
                                    Ciudad
                                </label>
                                <Select
                                    className="select-city-add"
                                    placeholder="Seleccionar"
                                    name="Ciudad"
                                    options={city}
                                    value={municipio}
                                    onChange={value=>setMunicipio(value)}
                                />
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
                                    Direccion
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

const mapStateToProps = ({ settings }) => {
    return settings;
}

const mapDispatchToProps = dispatch => ({
    getStates: () => dispatch(getStates())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePlaces);