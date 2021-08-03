import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faInstagram } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faPrint } from '@fortawesome/free-solid-svg-icons'

import logoMediclarForm from '../../../img/logoForm.jpg'
import backgroundForm from '../../../img/background-form.jpg'
import '../../../styles/styleStatus.css';

import { connect } from 'react-redux';
import { getStates, cleanData, getPatient } from '../../../redux/actions';
import Select from 'react-select';

const Form = (props) => {
    const [states, setStates] = useState();
    const [selectState, setSelectState] = useState();
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [municipio, setMunicipio] = useState();
    const [forms, setForms] = useState([]);

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

    const handleGetPatient = async () => {
        // let promise
        const { patient } = props;
        setForms(patient)
    }

    useEffect(()=> {
        handleGetStates();
        props.cleanData();
        props.getPatient();
    }, [])

    useEffect(()=>{
        const { patient } = props;
        setForms(Object.values(patient))
    }, [props])

    return(
        <div className="container-status-primary">

            <div className="container-status-background">
                <img src={ backgroundForm } alt="background"/>
            </div>

            <div className="overlay-status-header"></div>

            <div className="head-icon">
                <div className="icon-return">
                    <FontAwesomeIcon className="icon-button" icon={ faArrowAltCircleLeft }/>
                </div>

                <div className="icon-web">
                    <FontAwesomeIcon className="icon-style" icon={ faGlobe }/>
                    <p className="titleIcon">www.mediclarlab.com</p>
                </div>

                <div className="icon-mail">
                    <FontAwesomeIcon className="icon-style" icon={ faEnvelope }/>
                    <p className="titleIcon">info@mediclarlab.com</p>
                </div>

                <div className="icon-mail">
                    {/* <FontAwesomeIcon className="icon-style" icon={ ['fab','instagram'] }/> */}
                    <p className="titleIcon">mediclar_lab</p>
                </div>

                <div className="icon-phone">
                    <FontAwesomeIcon className="icon-style" icon={ faPhoneSquareAlt }/>
                    <p className="titleIcon">+52 1 33 1441 4922</p>
                </div>

                <div className="icon-exit">
                        <FontAwesomeIcon className="icon-button" icon={ faSignOutAlt }/>
                </div>

            </div>


            <div className="container-form-status-primary">

                <div align="center" className="container-logo-primary">

                    <div className="container-logo-register">
                        <img className="logo-login" src={ logoMediclarForm } alt="logo"/>
                    </div>

                    <p className="title-logo-login">LISTADO DE PACIENTES</p>

                </div>

                <div className="container-form-status">

                    <form className="form-status">


                        <div className="container-block-search-primary">

                            <div className="container-block-search-status">

                                <div className="container-search">
                                    <label
                                        htmlFor="status" 
                                        className="label-form-search"
                                    >
                                        Estado
                                    </label>

                                    <Select
                                        className="select-status-status"
                                        placeholder="Seleccionar"
                                        name="status"
                                        options={selectState}
                                        value={state}
                                        onChange={value=>selectCity(value)} /** */
                                    />

                                </div>

                                
                                <div className="container-search">
                                    <label
                                        htmlFor="city" 
                                        className="label-form-search"
                                    >
                                        Ciudad
                                    </label>

                                    <Select
                                        className="select-status-city"
                                        placeholder="Seleccionar"
                                        name="city"
                                        options={city}
                                        value={municipio}
                                        onChange={value=>setMunicipio(value)}
                                    />
                                </div>

                                <div className="container-search">
                                    <label
                                        htmlFor="business" 
                                        className="label-form-search"
                                    >
                                        Empresa
                                    </label>

                                    <input
                                        type="text"
                                        name="business"
                                        autoComplete="off"
                                        className="input-status-business"
                                        placeholder="Agregar..."

                                    />
                                </div>

                                <div className="container-search">
                                    <label
                                        htmlFor="direction" 
                                        className="label-form-search"
                                    >
                                        Dirección
                                    </label>

                                    <input
                                        type="text"
                                        name="direction"
                                        autoComplete="off"
                                        className="input-status-direction"
                                        placeholder="Agregar..."

                                    />
                                </div>

                            </div>


                            





                            <div className="container-block-search-date-primary">

                                <div className="container-block-search-date">

                                    <div className="container-search-date">
                                        <label
                                            htmlFor="dateOf" 
                                            className="label-form-search"
                                        >
                                            Fecha de
                                        </label>

                                        <select
                                            name="dateOf"
                                            className="select-dateOf-day"
                                        >
                                            <option value="">00</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>

                                        </select>
                                    </div>

                                    
                                    <div className="container-search-date1">

                                        <select
                                            name="dateOf"
                                            className="select-dateOf-month"
                                        >
                                            <option value="">00</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>

                                        </select>
                                    </div>

                                    <div className="container-search-date1">

                                        <select
                                            name="dateOf"
                                            className="select-dateOf-year"
                                        >
                                            <option value="">0000</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>

                                        </select>
                                    </div>

                                </div>





                            

                                <div className="container-block-search-date">

                                    <div className="container-search-date">
                                        <label
                                            htmlFor="dateOf" 
                                            className="label-form-search"
                                        >
                                            A
                                        </label>

                                        <select
                                            name="dateOf"
                                            className="select-dateOf-day"
                                        >
                                            <option value="">00</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>

                                        </select>
                                    </div>

                                    
                                    <div className="container-search-date1">

                                        <select
                                            name="dateOf"
                                            className="select-dateOf-month"
                                        >
                                            <option value="">00</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>

                                        </select>
                                    </div>

                                    <div className="container-search-date1">

                                        <select
                                            name="dateOf"
                                            className="select-dateOf-year"
                                        >
                                            <option value="">0000</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>

                                        </select>
                                    </div>

                                </div>
                                <button className="button-search">
                                    <FontAwesomeIcon className="icon-button-search" icon={ faSearch }/>
                                </button>
                            </div>
   
                        </div>

                    </form>

                    <table className="tableStatus">
                       <thead>
                            <tr>
                                <th className="thStatus">Folio</th>
                                <th className="thStatus">Origen</th>
                                <th className="thStatus">Fecha</th>
                                <th className="thStatus">Hora</th>
                                <th className="thStatus">Nombre(s)</th>
                                <th className="thStatus">Apellido Paterno</th>
                                <th className="thStatus">Apellido Materno</th>
                                <th className="thStatus">Fecha de Nacimiento</th>
                                <th className="thStatus">Genero</th>
                                <th className="thStatus">Pasaporte</th>
                                <th className="thStatus">Mail</th>
                                
                                    <th className="thStatus">Enviar</th>
                                    <th className="thStatus">WhatsApp</th>
                                    <th className="thStatus">Enviar</th>
                                    <th className="thStatus">SMS</th>
                                    <th className="thStatus">Enviar</th>

                                <th className="thStatus">PDF</th>
                            </tr>
                        </thead>
                        <tbody>
                            {forms!==undefined&&forms.length>0?forms.map(x=>{
                                return <tr key={x.id}>
                                    <td className="tdStatus">{x.id}</td>
                                    <td className="tdStatus">{x.locationId}</td>
                                    <td className="tdStatus">{x.createdAt}</td>
                                    <td className="tdStatus">{x.createdAt}</td>
                                    <td className="tdStatus">{x.name}</td>
                                    <td className="tdStatus">{x.firstLastName}</td>
                                    <td className="tdStatus">{x.secondLastName?x.secondLastName:'-'}</td>
                                    <td className="tdStatus">{x.dob} </td>
                                    <td className="tdStatus">{x.gender}</td>
                                    <td className="tdStatus">{x.passport}</td>
                                    <td className="tdStatus">{x.email}</td>
                                    <td className="tdStatus">
                                        <input 
                                            type="radio"
                                            name="send"
                                            value="imail"
                                        />
                                    </td>
                                    <td className="tdStatus">{`${x.phoneLada} ${x.phone}`}</td>
                                    <td className="tdStatus">
                                        <input 
                                            type="radio"
                                            name="send"
                                            value="phone"
                                        />
                                    </td>
                                    <td className="tdStatus">{`${x.phoneLada} ${x.phone}`}</td>
                                    <td className="tdStatus">
                                        <input 
                                            type="radio"
                                            name="send"
                                            value="SMS"
                                        />
                                    </td>
                                    <td className="tdStatus">
                                        <Link to={`${props.match.path}/form-resul-pdf`}>
                                            <button className="button-print">
                                                <FontAwesomeIcon className="icon-button-print" icon={ faPrint }/>
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            }):<tr></tr>}
                        </tbody>
                       

                    </table>

                        <div className="container-btn-status">
                            <button className="btn-agregar"onClick={()=>props.history.push("/mediclar/app/places/register")}>AGREGAR LUGAR DE ORIGEN</button>
                            <button className="btn-lugar" onClick={()=>props.history.push("/mediclar/app/form-main/patient-list")}>LUGARES DE ORIGENES</button>                        </div>
                        </div>

            </div>
                <div className="footer">
                    <p>© 2021 Mediclar es una marca registrada de Barter Box SA de CV</p>
                </div>
        </div>
    )
}

const mapStateToProps = ({ settings, patient }) => {
    return {settings, patient};
}

const mapDispatchToProps = dispatch => ({
    getStates: () => dispatch(getStates()),
    cleanData: () => dispatch(cleanData()),
    getPatient: () => dispatch(getPatient())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);