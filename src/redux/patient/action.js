import axios from 'axios';
import {
    REGISTER_PATIENT
} from '../actions';

export const registerPatient = value => {
    console.log(value)
    return {
        type: REGISTER_PATIENT,
        payload: { ...value }
    }
}