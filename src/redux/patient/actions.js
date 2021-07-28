import axios from 'axios';
import {
    REGISTER_PATIENT,
    GET_LOCATION,
    REGISTER_LOCATION
} from '../actions';

const authorizationToken = localStorage.getItem("Authorization");

export const registerPatient = value => {
    return {
        type: REGISTER_PATIENT,
        payload: { ...value }
    }
}

/* GET LOCATION */

const getLocationAsync = async () => {
    let resulLocation = await axios.post('https://sleepy-turing.50-21-189-39.plesk.page/api/v1/locations/get-locations', 
    {headers: {authorizationToken}}).then(result => result.data).catch(err => err);
    return resulLocation;
}

export const getLocation = () => async dispatch => {
    let dataLocation = await getLocationAsync();
    const { data } = dataLocation;
    const dataResul = Object.values(data);
    return {
        type: GET_LOCATION,
        payload: dataResul
    }
}

/* REGISTER_LOCATION */

const registerLocationAsync = async (data) => {
    let resultRegister = await axios.post('https://sleepy-turing.50-21-189-39.plesk.page/api/v1/locations/upsert-location',{
        id: data.state.value,
        name: data.name,
        cityId: data.municipio.value,
        company: data.company,
        address: data.address,
    },{headers: {authorizationToken}}).then(result => result.data).catch(err=>err);
    return resultRegister;
}

export const registerLocation = (value) => async dispatch => {
    const { address, company, municipio, name, state } = value;
    const registerResul = await registerLocationAsync({address, company, municipio, name, state});
    console.log(registerResul);
    return dispatch({
        type: REGISTER_LOCATION,
        payload: value
    })
}