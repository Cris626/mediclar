import React, { useState, useEffect } from 'react';
import '../../styles/login.css';
import Select from 'react-select';

import logoMediclar from '../../img/logo.jpg';
import backgroundLogin from '../../img/background-login.jpg';

import { getStates, generateQR } from '../../redux/actions';
import { connect } from 'react-redux';

const selectOption = [
    { label: "Si / Yes", value: 1, key: 0 },
    { label: "No / No", value: 0, key: 1 }
];

const GenerateQr = props => {
    let [option, setOption] = useState("");
    const [states, setStates] = useState();
    const [selectState, setSelectState] = useState();

    const handleGenQR=()=>{
        const {history} = props;
        props.generateQR({history, states, option});
    }

    const handleGetStates = async () => {
        let resulStates = [];
        let data = props.getStates();
        let promise = await Promise.resolve(data);
        await promise.payload.map(x=>{
            resulStates.push({ label: x.estado, value: x.id, key: x.id })
        })
        setSelectState(resulStates)
    }

    useEffect(()=>{
        handleGetStates();
    }, [])
    
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
                            options={selectState}
                            value={states}
                            onChange={value=>setStates(value)}
                        />
                        <p className="session-label">HOTEL/HOTEL</p>
                        <Select 
                            className="input-register-select"
                            placeholder="Seleccionar/Select"
                            options={selectOption}
                            value={option}
                            onChange={value=>setOption(value)}
                        />
                        <button className="btn-login" onClick={handleGenQR}>
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({authUser, settings }) => {
    return {authUser, settings};
}

const mapDispatchToProps = dispatch => ({
    generateQR: value => dispatch(generateQR(value)),
    getStates: () => dispatch(getStates())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GenerateQr);