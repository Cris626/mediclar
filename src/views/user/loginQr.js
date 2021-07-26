import React, { useState, useEffect } from 'react';
import '../../styles/login.css';

import logoMediclar from '../../img/logo.jpg';
import backgroundLogin from '../../img/background-login.jpg';

import { loginQR } from '../../redux/actions';
import { connect } from 'react-redux';

const Login = props => {
    const [qr, setQr] = useState(props.authUser.dataQr);

    const handleQR= async () => {
        let promise = await Promise.resolve(qr);
        setQr(promise)
    }

    useEffect(()=>{
        handleQR();
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
                        <p className="session-title"  style={{fontSize: "20px", width: "130px", paddingBottom: "6.5px"}} >INGRESAR</p>
                        <img className="img-generate-qr" src={`${qr}`} />
                        {/* {<button onClick={()=>props.loginQR(props)}>
                            QR
                        </button>} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ authUser }) => {
    return {authUser};
}

const mapDispatchToProps = dispatch => ({
    loginQR: value => dispatch(loginQR(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);