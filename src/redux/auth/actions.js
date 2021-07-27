import axios from 'axios';
import {
    LOGIN_ADMIN,
    LOGIN_QR,
    GENERATE_QR
} from '../actions';

/* LOGIN ADMIN */

const getLoginAsync = async (email, pass) =>{
    let resulLogin = await axios.post('https://sleepy-turing.50-21-189-39.plesk.page/api/v1/users/signin-local',{
        email: email,
        password: pass
    }).then(result => result.data).catch(err=>err.response.status);
    return resulLogin;
}

export const loginAdmin = user => async (dispatch) => {
    let {email, password} = user;
    let dataLogin = await getLoginAsync(email, password);
    const {status, data} = dataLogin;
    if(status===200){
        return dispatch({
            type: LOGIN_ADMIN,
            payload: {...data, status}
        })
    }else{
        return dispatch({
            type: LOGIN_ADMIN,
            payload: {status: dataLogin}
        })
    }
}

export const loginQR = value => {
    const {history} = value;
    history.push('/mediclar/selected-lang');
    return {
        type: LOGIN_QR,
        payload: value
    }
}

/* GENERATE QR */

const getQrAsync = async (option, origin) => {
    let resultQr = await axios.post('https://sleepy-turing.50-21-189-39.plesk.page/api/v1/locations/generate-qr',{
        locationId: origin.value,
        isHotel: option.value
    }).then(result => result.data.data).catch(err=>err.response.status);
    return resultQr;
}

export const generateQR = value => {
    const {history, option, states} = value;
    if(option && states){
        let dataQr = getQrAsync(option, states);
        history.push('/mediclar/login-qr');
        return{
            type: GENERATE_QR,
            payload: {dataQr}
        }
    }else{
        // alert("**Seleccionar opciones**")
        return{
            type: GENERATE_QR,
            payload: ""
        }
    }
}