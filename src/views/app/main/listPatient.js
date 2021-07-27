import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faInstagram } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import logoMediclarForm from '../../../img/logoForm.jpg'
import backgroundForm from '../../../img/background-form.jpg'
import '../../../styles/styleListPatients.css';

import { connect } from 'react-redux';
import { getLocation, getStates } from '../../../redux/actions';
import Select from 'react-select';

const ListPatient = (props) => {
    const [locations, setLocations] = useState();
    const [states, setStates] = useState();
    const [selectState, setSelectState] = useState();
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [municipio, setMunicipio] = useState();

    const handleGetLocations = async () => {
        let data = props.getLocation();
        let promise = await Promise.resolve(data);
        setLocations(promise.payload);
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

    useEffect(()=>{
        handleGetStates();
        handleGetLocations();
    }, [])

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

                            <div className="container-block-search-List">

                                <div className="container-list">
                                    <label
                                        htmlFor="status" 
                                        className="label-form-search"
                                    >
                                        Estado
                                    </label>

                                    <Select
                                        className="select-list-status"
                                        placeholder="Seleccionar"
                                        name="status"
                                        options={selectState}
                                        value={state}
                                        onChange={value=>selectCity(value.value)}
                                    />
                                </div>

                                
                                <div className="container-list">
                                    <label
                                        htmlFor="city" 
                                        className="label-form-search"
                                    >
                                        Ciudad
                                    </label>

                                    <Select
                                        className="select-city"
                                        placeholder="Seleccionar"
                                        name="Ciudad"
                                        options={city}
                                        value={municipio}
                                        onChange={value=>setMunicipio(value)}
                                    />
                                </div>


                            </div>
   
                        </div>

                    </form>

                    <table className="tableStatus">
                       <thead>
                            <tr>
                                <th className="thStatus">Nombre</th>
                                <th className="thStatus">Estado</th>
                                <th className="thStatus">Ciudad</th>
                                <th className="thStatus">Empresa/Hotel</th>
                                <th className="thStatus">Dirección(s)</th>
                                <th className="thStatus"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {locations!==undefined?locations.map(x=>{
                                return <tr key={x.id}>
                                    <td className="tdStatus" key={x.name}>{x.name}</td>
                                    <td className="tdStatus" key={x.city.estado[0].estado}>{x.city.estado[0].estado}</td>
                                    <td className="tdStatus" key={x.city.municipio}>{x.city.municipio}</td>
                                    <td className="tdStatus" key={x.company}>{x.company}</td>
                                    <td className="tdStatus" key={x.address}>{x.address}</td>
                                    <td className="tdStatus" key={x.id+1}>
                                            <button key={`Button-${x.id+2}`} className="button-list">
                                                <FontAwesomeIcon className="icon-button-edit" icon={ faEdit }/>
                                            </button>
                                            <button key={`Button-${x.id+3}`} className="button-list">
                                                <FontAwesomeIcon className="icon-button-delet" icon={ faTrashAlt }/>
                                            </button>
                                    </td>
                                </tr>
                            }):<tr></tr>}
                        </tbody>
                       

                    </table>

                        <div className="container-btn-status">
                            <button className="btn-agregar"onClick={()=>props.history.push("/mediclar/app/places/register")}>AGREGAR LUGAR DE ORIGEN</button>                    
                        </div>
                </div>

            </div>
                <div className="footer">
                    <p>© 2021 Mediclar es una marca registrada de Barter Box SA de CV</p>
                </div>
        </div>
    )
}

const mapStateToProps = ({patient, settings}) => {
    return {patient, settings};
};

const mapDispatchToProps = dispatch => ({
    getLocation: () => dispatch(getLocation()),
    getStates: () => dispatch(getStates())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPatient);