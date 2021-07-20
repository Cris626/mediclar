import {
    LOGIN_ADMIN,
    LOGIN_QR
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