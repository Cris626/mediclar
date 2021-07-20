import {
    LOGIN_ADMIN
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
        history.push('/mediclar/admin/form-main')        
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