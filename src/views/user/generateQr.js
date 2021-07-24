import React, { useState } from 'react';
import '../../styles/login.css';
import Select from 'react-select';

import logoMediclar from '../../img/logo.jpg';
import backgroundLogin from '../../img/background-login.jpg';

import { loginQR } from '../../redux/actions';
import { connect } from 'react-redux';

const selectOption = [
    { label: "Si / Yes", value: "1", key: 0 },
    { label: "No / No", value: "2", key: 1 }
];

const selectOrigin = [
    { label: "Guadalajara", value:"Guadalajara", key: 0 },
    { label: "Puerto Vallarta", value:"Puerto Vallarta", key: 1 },
    { label: "CDMX", value:"CDMX", key: 3 }
];

const GenerateQr = props => {

    const handleQR=()=>{
        props.loginQR(props)
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
                <div className="container-generate-qr">
                    <div className="container-name-generate-qr">
                        <p className="session-title" style={{fontSize: "20px", width: "130px", paddingBottom: "6.5px"}}>GENERADOR DE QR</p>
                        <p className="session-label-primary">ORIGEN/ORIGIN</p>
                        <Select 
                            className="input-register-select"
                            placeholder="Seleccionar/Select"
                            options={selectOrigin}
                        />
                        <p className="session-label">HOTEL/HOTEL</p>
                        <Select 
                            className="input-register-select"
                            placeholder="Seleccionar/Select"
                            options={selectOption}
                        />
                        <button className="btn-login" onClick={()=>handleQR()}>
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ }) => {
    return {};
}

const mapDispatchToProps = dispatch => ({
    loginQR: value => dispatch(loginQR(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GenerateQr);