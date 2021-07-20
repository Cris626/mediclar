import { defaultLocale, localeOptions } from '../../constants/defaultValues';

import {
    CHANGE_LOCALE
} from '../actions';

const initialState = {
    locale: (localStorage.getItem('currentLanguage') && localeOptions.filter(x=>x.id===localStorage.getItem('currentLanguage')).length>0) ? localStorage.getItem('currentLanguage') : defaultLocale,
};

export default (state = initialState, action) => {
    switch(action.type){
        case CHANGE_LOCALE:
            return{ ...state, locale: action.payload};
        default:
            return { ...state };
    }
};