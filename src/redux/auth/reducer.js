import {
    LOGIN_ADMIN,
    LOGIN_QR,
    GENERATE_QR
} from '../actions';

const initialState = {
    flag: false
}

export default ( state = initialState, action) => {
    switch(action.type){
        case LOGIN_ADMIN:
            return { ...state, ...action.payload };
        case LOGIN_QR:
            return { ...state, ...action.payload };
        case GENERATE_QR:
            return { ...state, ...action.payload };
        default:
            return { ...state };
    }
}