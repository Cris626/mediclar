import React, { useState } from 'react';
import '../../styles/login.css';

import logoMediclar from '../../img/logo.jpg';
import backgroundLogin from '../../img/background-login.jpg'

const SelectedLang = props => {

    const handleChangeLang=(option)=>{
        return console.log(option)
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
                    <p className="session-title" style={{textAlign: "center"}}>IDIOMA / LANGUAGE</p>
                    <p className="session-title" style={{textAlign: "center"}}>Seleccionar idioma / Select language</p>
                    <button onClick={()=>handleChangeLang('es')}>
                        ESPAÑOL
                    </button>
                    <button onClick={()=>handleChangeLang('en')}>
                        INGLES
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SelectedLang;