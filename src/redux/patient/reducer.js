import {
    REGISTER_PATIENT,
    GET_LOCATION,
    REGISTER_LOCATION,
    CLEAN_DATA_PATIENT,
    DELETE_LOCATION,
    GET_PATIENT
} from '../actions';

const initialState = {
    listPatient: []
}

let reducer = ( state = initialState, action) => {
    switch (action.type) {
        case REGISTER_PATIENT:
            return { ...state, ...action.payload };
        case GET_LOCATION:
            return { ...state, ...action.payload };
        case REGISTER_LOCATION:
            return { ...state, ...action.payload };
        case DELETE_LOCATION:
            return { ...state, ...action.payload };
        case GET_PATIENT:
            return { ...state, ...action.payload };
        case CLEAN_DATA_PATIENT:
            return { state: initialState };
        default:
            return { ...state };
    }
}

export default reducer;