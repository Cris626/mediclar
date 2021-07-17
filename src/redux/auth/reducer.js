import {
    LOGIN_ADMIN
} from '../actions';

const initialState = {
    name: 'Cristian',
    user: 'admin',
    country: 'Bolivia'
}

let reducer = ( state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ADMIN:
            return { ...state, ...action.payload };
        default:
            return { ...state };
    }
}

export default reducer;