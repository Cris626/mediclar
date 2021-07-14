import {
    LOGIN_ADMIN
} from '../actions';

export const loginAdmin = value => {
    return {
        type: LOGIN_ADMIN,
        payload: {value}
    }
}