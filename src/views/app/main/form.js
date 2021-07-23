import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faInstagram } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import logoMediclarForm from '../../../img/logoForm.jpg'
import backgroundForm from '../../../img/background-form.jpg'
import '../../../styles/styleStatus.css';

const Form = () => {
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
                    <FontAwesomeIcon className="icon-style" icon={ ['fab','instagram'] }/>
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

                                    <select
                                        name="status"
                                        className="select-status-status"
                                    >
                                        <option value="">Selection..</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>

                                    </select>
                                </div>

                                
                                <div className="container-search">
                                    <label
                                        htmlFor="city" 
                                        className="label-form-search"
                                    >
                                        Ciudad
                                    </label>

                                    <select
                                        name="city"
                                        className="select-status-city"
                                    >
                                        <option value="">Selection..</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>

                                    </select>
                                </div>

                                <div className="container-search">
                                    <label
                                        htmlFor="business" 
                                        className="label-form-search"
                                    >
                                        Ciudad
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

                </div>


                <div className="footer">
                    <p>© 2021 Mediclar es una marca registrada de Barter Box SA de CV</p>
                </div>
            </div>
        </div>
    )
}

export default Form;