import axios from 'axios';
import {
    REGISTER_PATIENT,
    GET_LOCATION
} from '../actions';

export const registerPatient = value => {
    return {
        type: REGISTER_PATIENT,
        payload: { ...value }
    }
}

/* GET LOCATION */

const getLocationAsync = async () => {
    let resulLocation = await axios.post('https://sleepy-turing.50-21-189-39.plesk.page/api/v1/locations/get-locations')
    .then(result => result.data).catch(err => err);
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