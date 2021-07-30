import React from 'react';
import backgroundLogin from '../img/background-login.jpg';
import '../styles/login.css';


const Screen = props => {
    return (
        <div className="container-primary">
            <div className="container-background">
                <img className="background-login" src={ backgroundLogin } alt="background"/>
            </div>
            <div className="overlay-header"></div>
            <div className="container-login-primary">
                
            </div>
        </div>
    )
}

export default Screen;