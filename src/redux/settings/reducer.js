import { defaultLocale, localeOptions } from '../../constants/defaultValues';

import {
    CHANGE_LOCALE, 
    GET_STATES
} from '../actions';

const initialState = {
    locale: (localStorage.getItem('currentLanguage') && localeOptions.filter(x=>x.id===localStorage.getItem('currentLanguage')).length>0) ? localStorage.getItem('currentLanguage') : defaultLocale,
};

export default (state = initialState, action) => {
    switch(action.type){
        case CHANGE_LOCALE:
            return{ ...state, locale: action.payload};
        case GET_STATES:
            return {...state, states: {...action.payload}}
        default:
            return { ...state };
    }
};