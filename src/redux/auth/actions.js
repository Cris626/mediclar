import axios from 'axios';
import {
    LOGIN_ADMIN,
    LOGIN_QR,
    GENERATE_QR
} from '../actions';

export const loginAdmin = user => {
    let history = user.history;
    let flag = false;
    let dataAuthentication = {
        email: "admin@mediclar.com",
        name: "mediclar",
        password: "mediclar123"
    }

    if(dataAuthentication.name === user.name && dataAuthentication.password === user.password && dataAuthentication.email === user.email){
        history.push('/mediclar/app/form-main')        
        flag = true;
        alert("Datos correctos");
    }else{
        history.push('/')
        flag = false;
        alert("Datos incorrectos");
    }

    return {
        type: LOGIN_ADMIN,
        payload: {...user, flag}
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

const getQrAsync = async (option, origin) => {
    let resultQr = await axios.post('https://sleepy-turing.50-21-189-39.plesk.page/api/v1/locations/generate-qr',{
        locationId: origin.value,
        isHotel: option.value
    }).then(result => result.data.data).catch(err=>err.response.status);
    return resultQr;
}

export const generateQR = value => {
    const {history, option, origin} = value;
    if(option && origin){
        let dataQr = getQrAsync(option, origin);
        // const promise = await Promise.resolve(resultQr);
        history.push('/mediclar/login-qr');
        return{
            type: GENERATE_QR,
            payload: {dataQr}
        }
    }else{
        alert("**Seleccionar opciones**")
        return{
            type: GENERATE_QR,
            payload: ""
        }
    }
}