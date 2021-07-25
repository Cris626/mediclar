import {
    REGISTER_PATIENT
} from '../actions';

const initialState = {}

let reducer = ( state = initialState, action) => {
    switch (action.type) {
        case REGISTER_PATIENT:
            return { ...state, ...action.payload };
        default:
            return { ...state }
    }
}

export default reducer;