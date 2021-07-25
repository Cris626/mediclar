import { combineReducers } from 'redux';
import settings from './settings/reducer';
import authUser from './auth/reducer';
import patient from './patient/reducer';

const reducer = combineReducers({
    authUser,
    settings,
    patient
})

export default reducer;