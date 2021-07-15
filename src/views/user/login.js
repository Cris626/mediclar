import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginAdmin } from '../../redux/actions';

const Login = props => {
    const [data, setData] = useState({
        user: '',
        password: ''
    });

    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }
    
    const handleSession = event => {
        let history = props.history;
        event.preventDefault();
        props.loginAdmin({...data, history});
    }

    return(
        <div>
            <form onSubmit={handleSession}>
                <p>Usuario:</p>
                <input type="text" name="user" placeholder="Ingresar usuario" onChange={handleInputChange}/>
                <p>Contraseña</p>
                <input type="pass" name="password" placeholder="Ingresar contraseña" onChange={handleInputChange}/>
                <input 
                    type="submit" 
                    value="Ingresar"
                />
            </form>
        </div>
    )
}

const mapStateToProps = ({authUser}) => {
    return authUser;
};

const mapDispatchToProps = dispatch => ({
    loginAdmin: value => dispatch(loginAdmin(value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);