import React, { useState } from 'react';
import '../../styles/login.css';

import logoMediclar from '../../img/logo.jpg';
import backgroundLogin from '../../img/background-login.jpg';

import { loginQR } from '../../redux/actions';
import { connect } from 'react-redux';

const Login = props => {

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

const mapStateToProps = ({ }) => {
    return {};
}

const mapDispatchToProps = dispatch => ({
    loginQR: value => dispatch(loginQR(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);