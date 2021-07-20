import React, { useState } from 'react';
import '../../styles/login.css';

import logoMediclar from '../../img/logo.jpg'
import backgroundLogin from '../../img/background-login.jpg'

const Login = props => {

    const handleQR=()=>{
        return console.log(props)
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
                <div className="container-login">
                    <p className="session-title">INGRESAR</p>
                    <button onClick={()=>handleQR()}>
                        QR
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;