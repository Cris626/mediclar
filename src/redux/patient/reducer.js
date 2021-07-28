import {
    REGISTER_PATIENT,
    GET_LOCATION,
    REGISTER_LOCATION
} from '../actions';

const initialState = {}

let reducer = ( state = initialState, action) => {
    switch (action.type) {
        case REGISTER_PATIENT:
            return { ...state, ...action.payload };
        case GET_LOCATION:
            return { ...state, ...action.payload };
        case REGISTER_LOCATION:
            return { ...state, ...action.payload };
        default:
            return { ...state };
    }
}

export default reducer;