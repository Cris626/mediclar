import {
    CHANGE_LOCALE
} from '../actions';

export const changeLocale = (locale) => {
    const {option, props} = locale;
    props.history.push('/mediclar/app/result-document')        
    localStorage.setItem('currentLanguaje', locale);
    return{
        type: CHANGE_LOCALE,
        payload: option
    }
}