import React from 'react';

import logoMediclar from '../../../img/logo.jpg'
import backgroundLogin from '../../../img/background-login.jpg'
import successfull from '../../../img/successfull.jpg'

import '../../../styles/addSite.css';

const SuccessRegister = props => {
    return (
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

                    <div className="container-img-successful-register">
                        <img src={ successfull } alt="background"/>
                    </div>

                    <div className="container-title-successful">
                        <p className="session-title">SOLICITUD ENVIADA EXITOSAMENTE</p>
                    </div>
                    <div className="container-login-successful-primary-register">
                        <div className="container-pre-data">
                            <p><span className="pre-data">Nombre:</span></p>
                            <p>Flavio Torres González</p>
                        </div>
                    </div>

                    <div className="container-login-successful-primary-register">
                        <div className="container-pre-data">
                            <p><span className="pre-data">Fecha de Nacimiento:</span></p>
                            <p>19/DIC/ 1984</p>
                        </div>
                    </div>

                    <div className="container-login-successful-primary-register">
                        <div className="container-pre-data">
                            <p><span className="pre-data">Género:</span></p>
                            <p>Masculino</p>
                        </div>
                    </div>

                    <div className="container-login-successful-primary-register">
                        <div className="container-pre-data">
                            <p><span className="pre-data">Correo:</span></p>
                            <p>flavio.tg@mediclarlab.com</p>
                        </div>
                    </div>

                    <div className="container-login-successful-primary-register">
                        <div className="container-pre-data">
                            <p><span className="pre-data">Teléfono:</span></p>
                            <p>+52 33 1551 1563</p>
                        </div>
                    </div>

                    <div className="container-login-successful-primary-prueba">
                        <div className="container-pre-data-prueba">
                            <p>Tipo de Prueba:</p>
                            <p>PCR</p>
                        </div>
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

export default SuccessRegister;