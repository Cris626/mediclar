import React, { useState , useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { getStates, registerLocation, cleanDataPatient } from '../../../redux/actions';
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
    const [edit, setEdit] = useState(false);
    
    const{register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit = async (data, e) => {
        e.target.reset();
        await props.registerLocation({...data, state, municipio})
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
        setState(id)    /** */
        setMunicipio("")
        let data = states;
        let resulData = [];
        await data.map(x=>{
            if(x.id===id.value){    /** */
                x.municipios.map(y=>{
                    resulData.push({ label: y.municipio, value: y.id, key: y.id})
                })
            }
        })
        setCity(resulData);
    }

    useEffect(()=>{
        const {patient} = props;
        setEdit(patient.editLocation);
    })

    useEffect(()=> {
        handleGetStates();
        const {patient} = props;
        if(patient){
            if(patient.status===200){
                let {history} = props;
                history.push('/mediclar/app/places/register-successful')
            }else{
                console.log("Error", patient)
            }
        }
    }, [props])

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
                    <button onClick={()=>console.log(props.patient.editLocation)}>ClickDelete</button>
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
                                value={edit.name?edit.name:""}
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
                                    value={edit.city? {label: edit.city.estado.estado, value: edit.city.estado.id, key: edit.city.estado.id}:state}
                                    onChange={value=>selectCity(value)} /** */
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
                                    // value={municipio}
                                    value={edit.city? {label: edit.city.municipio, value: edit.city.id, key: edit.city.id}:municipio}
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
                                <input
                                    style={{
                                        width: "214px",
                                        height: "28px"
                                    }}
                                    type="text"
                                    name="company"
                                    autoComplete="off"
                                    className="input-login"
                                    placeholder="Agregar..."
                                    value={edit.company?edit.company:""}
                                    {...register("company", {
                                        required:{
                                            value: true,
                                            message: 'Campo Requerido'
                                        }, 
                                    })}
                                />
                            </div>

                            <div className="container-state-city">
                                <label
                                    htmlFor="Ciudad" 
                                    className="label-login-name"
                                >
                                    Direccion
                                </label>
                                <input
                                    style={{
                                        width: "214px",
                                        height: "28px"
                                    }}
                                    type="text"
                                    name="address"
                                    autoComplete="off"
                                    className="input-login"
                                    placeholder="Agregar..."
                                    value={edit.address?edit.address:""}
                                    {...register("address", {
                                        required:{
                                            value: true,
                                            message: 'Campo Requerido'
                                        }, 
                                    })}
                                />
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
                            <button className="btn-login" >ACEPTAR</button>
                        </div>

                    </form>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = ({ settings, patient }) => {
    return {settings, patient};
}

const mapDispatchToProps = dispatch => ({
    getStates: () => dispatch(getStates()),
    registerLocation: value => dispatch(registerLocation(value)),
    cleanDataPatient: () => dispatch(cleanDataPatient())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePlaces);