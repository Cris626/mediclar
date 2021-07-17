import {
    LOGIN_ADMIN
} from '../actions';

export const loginAdmin = user => {
    let history = user.history;
    let flag = false;
    let dataAuthentication = {
        user: "admin",
        pass: "admin123"
    }

    if(dataAuthentication.user === user.user && dataAuthentication.pass === user.password){
        history.push('/mediclar/main')        
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