import { combineReducers } from 'redux';
import settings from './settings/reducer';
import authUser from './auth/reducer';

const reducer = combineReducers({
    authUser,
    settings
})

export default reducer;