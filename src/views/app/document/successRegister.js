import React from 'react';

import logoMediclar from '../../../img/logo.jpg'
import backgroundLogin from '../../../img/background-login.jpg'
import successfull from '../../../img/successfull.jpg'

import '../../../styles/addSite.css';
import { connect } from 'react-redux';

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
                            <p>{`${props.patient.name} ${props.patient.surname} ${props.patient.secondSurname}`}</p>
                        </div>
                    </div>

                    <div className="container-login-successful-primary-register">
                        <div className="container-pre-data">
                            <p><span className="pre-data">Fecha de Nacimiento:</span></p>
                            <p>{props.patient.birth}</p>
                        </div>
                    </div>

                    <div className="container-login-successful-primary-register">
                        <div className="container-pre-data">
                            <p><span className="pre-data">Género:</span></p>
                            <p>{props.patient.gender}</p>
                        </div>
                    </div>

                    <div className="container-login-successful-primary-register">
                        <div className="container-pre-data">
                            <p><span className="pre-data">Correo:</span></p>
                            <p>{props.patient.email}</p>
                        </div>
                    </div>

                    <div className="container-login-successful-primary-register">
                        <div className="container-pre-data">
                            <p><span className="pre-data">Teléfono:</span></p>
                            <p>{`+${props.patient.codeArea} ${props.patient.phone}`}</p>
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

const mapStateToProps = ({ patient }) => {
    return { patient };
}

const mapDispatchToProps = dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SuccessRegister);
