/* SETTINGS */
export const CHANGE_LOCALE = "CHANGE_LOCALE";
export const GET_STATES = "GET_STATES";

/* LOGIN */

export const LOGIN_ADMIN = 'LOGIN_ADMIN';
export const LOGIN_QR = 'LOGIN_QR';
export const GENERATE_QR = 'GENERATE_QR';
export const CLEAN_DATA = 'CLEAN_DATA';

/* PATIENT */

export const REGISTER_PATIENT = 'REGISTER_PATIENT';
export const GET_LOCATION = 'GET_LOCATION';
export const REGISTER_LOCATION = 'REGISTER_LOCATION';
export const CLEAN_DATA_PATIENT = 'CLEAN_DATA_PATIENT';
export const DELETE_LOCATION = 'DELETE_LOCATION';

/* ALL */

export * from './auth/actions';
export * from './settings/actions';
export * from './patient/actions';