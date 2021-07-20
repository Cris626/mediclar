function defaultLang() {
    let lang = localStorage.getItem('currentLanguaje');
    if(lang){
        return lang;
    }else{
        return "en"
    }
}

export const defaultLocale = defaultLang();
export const localeOptions = [
    { id: "en", name: "English", direction: "ltr" },
    { id: "es", name: "Español", direction: "ltr" }
]