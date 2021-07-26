import React from 'react';

import logoMediclar from '../../../img/logo.jpg'
import backgroundLogin from '../../../img/background-login.jpg'
import successfull from '../../../img/successfull.jpg'

import '../../../styles/addSite.css';

const Successful = (props) => {
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

                
                <div className="container-login-successful-primary">

                    <div className="container-login-successful">

                        <div className="container-img-successful">
                            <img src={ successfull } alt="background"/>
                        </div>

                        <div className="container-title-successful">
                            <p className="session-title">AGREGAR LUGARES DE ORIGEN</p>
                        </div>

                        <div className="container-btn">
                            <button className="btn-login">ACEPTAR</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Successful;