import axios from 'axios';
import {
    REGISTER_PATIENT,
    GET_LOCATION,
    REGISTER_LOCATION,
    CLEAN_DATA_PATIENT,
    DELETE_LOCATION
} from '../actions';

const authorizationToken = localStorage.getItem("Authorization");

/* REGISTER_PATIENT */

const registerPatientAsync = async (data) => {
    let resultPatient = await axios.post('https://sleepy-turing.50-21-189-39.plesk.page/api/v1/locations/upsert-location',{
        locationId: 1111,
        name: data.name,
        firstLastName: data.surname,
        secondLastName: data.secondSurname,
        dob: data.birth,
        curp: data.curp,
        gender: data.gender,
        passport: data.passport,
        email: data.email,
        phoneLada: data.codeArea,
        phone: data.phone,
        testReason: "trip",
        testControl: "school",
        inAntigen: 0,
        isPCR: 1,
        isAntibody: 1,
        isHotel: 0,
        isProcessed: 1,
        isEmailProcessed: 1,
        isSMSProcessed: 1,
        isWhatsappProcessed: "",
        roonNumber: "123",
    },{headers: {'Authorization': authorizationToken}}).then(resul=>resul.data).catch(err=>err);
    console.log(resultPatient)
    return resultPatient;
}

export const registerPatient = value => async dispatch => {
    const register = await registerPatientAsync(value)
    console.log(register)
    return dispatch({
        type: REGISTER_PATIENT,
        payload: { register }
    })
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
    },{headers: {'Authorization': authorizationToken}}).then(result => result.data).catch(err=>err);
    return resultRegister;
}

export const registerLocation = (value) => async dispatch => {
    const { address, company, municipio, name, state } = value;
    const registerResul = await registerLocationAsync({address, company, municipio, name, state});
    return dispatch({
        type: REGISTER_LOCATION,
        payload: {...registerResul}
    })
}

/* DELETE_LOCATION */

export const deleteLocation = value => async dispatch => {
    console.log(value)
    return dispatch({
        type: DELETE_LOCATION,
        payload: {...value}
    })
}

/* CLEAN_DATA_PATIENT */

export const cleanDataPatient = () => async (dispatch) =>{
    return dispatch({
        type: CLEAN_DATA_PATIENT,
        payload: ""
    })
}