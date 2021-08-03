import axios from 'axios';
import {
    REGISTER_PATIENT,
    GET_LOCATION,
    REGISTER_LOCATION,
    CLEAN_DATA_PATIENT,
    DELETE_LOCATION,
    GET_PATIENT
} from '../actions';

const authorizationToken = { 'Authorization': localStorage.getItem("Authorization") }

/* REGISTER_PATIENT */

const registerPatientAsync = async (value) => {
    const {data, birth, date, motive, test, control} = value;
    let resultPatient = await axios.post('https://sleepy-turing.50-21-189-39.plesk.page/api/v1/locations/upsert-location',{
        locationId: 1111,
        name: data.name,
        firstLastName: data.surname,
        secondLastName: data.secondSurname,
        dob: birth,
        curp: data.curp,
        gender: data.gender,
        passport: data.passport,
        email: data.email,
        phoneLada: data.codeArea,
        phone: data.phone,
        testReason: motive,
        testControl: control,
        isAntigen: test.isAntigen,
        isPCR: test.isPCR,
        isAntibody: test.isAntibody,
        isHotel: 0,
        isProcessed: 0,
        isEmailProcessed: 0,
        isSMSProcessed: 0,
        isWhatsappProcessed: 0,
        roonNumber: "123",
    },{headers: authorizationToken}).then(resul=>resul.data).catch(err=>err);
    return resultPatient;
}

export const registerPatient = value => async dispatch => {
    const {birth} = value;
    const register = await registerPatientAsync(value)
    return dispatch({
        type: REGISTER_PATIENT,
        payload: { register, ...value.data, birth }
    })
}

/* GET LOCATION */

const getLocationAsync = async () => {
    let resulLocation = await axios.post('https://sleepy-turing.50-21-189-39.plesk.page/api/v1/locations/get-locations', 
    {headers: authorizationToken}).then(result => result.data).catch(err => err);
    return resulLocation;
}

export const getLocation = () => async dispatch => {
    let dataLocation = await getLocationAsync();
    const { data } = dataLocation;
    const dataResul = Object.values(data);
    return dispatch({
        type: GET_LOCATION,
        payload: dataResul
    })
}

/* GET_PATIENT */

const getPatientAsync = async () => {
    let result = await axios.post('https://sleepy-turing.50-21-189-39.plesk.page/api/v1/forms/get-forms',{},
    {headers: authorizationToken}).then(result => result.data).catch(err => err);
    return result;
}

export const getPatient = () => async dispatch => {
    let dataPatient = await getPatientAsync();
    const { data } = dataPatient;
    return dispatch({
        type: GET_PATIENT,
        payload: {listPatient: data}
    })
}

/* REGISTER_LOCATION */

const registerLocationAsync = async (data) => {
    let resultRegister = await axios.post('https://sleepy-turing.50-21-189-39.plesk.page/api/v1/locations/upsert-location',{
        name: data.name,
        cityId: data.municipio.value,
        company: data.company,
        address: data.address,
    },{ headers: authorizationToken}).then(result => result.data).catch(err=>err);
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

const deleteLocationAsync = async (data) => {
    let result = await axios.post('https://sleepy-turing.50-21-189-39.plesk.page/api/v1/locations/delete-location-by-id', {
        id: data
    }, {headers: authorizationToken}).then(result=>result.data).catch(err=>err)
    return result;
}

export const deleteLocation = value => async dispatch => {
    let resultDelete = await deleteLocationAsync(value);
    return dispatch({
        type: DELETE_LOCATION,
        payload: {...resultDelete}
    })
}

/* CLEAN_DATA_PATIENT */

export const cleanDataPatient = () => async (dispatch) =>{
    return dispatch({
        type: CLEAN_DATA_PATIENT,
        payload: ""
    })
}