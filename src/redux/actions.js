/* SETTINGS */
export const CHANGE_LOCALE = "CHANGE_LOCALE";
export const GET_STATES = "GET_STATES";

/* LOGIN */

export const LOGIN_ADMIN = 'LOGIN_ADMIN';
export const LOGIN_QR = 'LOGIN_QR';
export const GENERATE_QR = 'GENERATE_QR';

/* PATIENT */

export const REGISTER_PATIENT = 'REGISTER_PATIENT';
export const GET_LOCATION = 'GET_LOCATION';

/* ALL */

export * from './auth/actions';
export * from './settings/actions';
export * from './patient/actions';