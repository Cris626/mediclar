import axios from 'axios';
import {
    CHANGE_LOCALE,
    GET_STATES
} from '../actions';

const authorizationToken = localStorage.getItem("Authorization");

/* CHANGE LOCALE */

export const changeLocale = (locale) => {
    const {option, props} = locale;
    props.history.push('/mediclar/app/result-document')        
    localStorage.setItem('currentLanguaje', option);
    return{
        type: CHANGE_LOCALE,
        payload: option
    }
}

/* GET STATES */

const getStatesAsync = async () => {
    let resulData = await axios.post('https://sleepy-turing.50-21-189-39.plesk.page/api/v1/locations/get-estados', {headers: authorizationToken })
    .then(resul => resul.data).catch(err=>err);
    return resulData;
}

export const getStates = () => async dispatch => {
    const {data} = await getStatesAsync();
    const dataResul = Object.values(data);
    return {
        type: GET_STATES,
        payload: dataResul
    }
}