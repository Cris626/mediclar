import {
    REGISTER_PATIENT,
    GET_LOCATION,
    REGISTER_LOCATION,
    CLEAN_DATA_PATIENT
} from '../actions';

const initialState = {}

let reducer = ( state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case REGISTER_PATIENT:
            return { ...state, ...action.payload };
        case GET_LOCATION:
            return { ...state, ...action.payload };
        case REGISTER_LOCATION:
            return { ...state, ...action.payload };
        case CLEAN_DATA_PATIENT:
            return { state: initialState };
        default:
            return { ...state };
    }
}

export default reducer;