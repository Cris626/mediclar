import React, { useState } from 'react';
import '../../styles/login.css';

import logoMediclar from '../../img/logo.jpg';
import backgroundLogin from '../../img/background-login.jpg'

import { changeLocale } from '../../redux/actions';
import { connect } from 'react-redux';

import IntlMessages from '../../helpers/IntlMessages';

const SelectedLang = props => {

    const handleChangeLang=(option)=>{
        props.changeLocale({option, props});
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

const mapStateToProps = ({ settings }) => {
    const { locale } = settings;
    return {locale};
}

const mapDispatchToProps = dispatch => ({
    changeLocale: value => dispatch(changeLocale(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectedLang);