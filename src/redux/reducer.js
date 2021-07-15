import { combineReducers } from 'redux';
import authUser from './auth/reducer';

const reducer = combineReducers({
    authUser
})

export default reducer;