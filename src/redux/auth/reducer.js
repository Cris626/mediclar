import {
    LOGIN_ADMIN,
    LOGIN_QR
} from '../actions';

const initialState = {}

let reducer = ( state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ADMIN:
            return { ...state, ...action.payload };
        case LOGIN_QR:
            return { ...state, ...action.payload};
        default:
            return { ...state };
    }
}

export default reducer;