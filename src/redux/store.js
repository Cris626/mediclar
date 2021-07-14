import { createStore } from 'redux';
import reducer from './reducer';

export function configureStore(initialState){
    const store = createStore(
        reducer
    );
    return store;
}