import { createStore, combineReducers, compose} from 'redux';
import persistState from 'redux-localstorage';

function tokenReducer(state='', action){
    switch (action.type) {
        case 'SET_TOKEN':
            return action.token; 
        case 'CLEAR_TOKEN':
            return ''
        default:
            return state;
    }
}

function userReducer(state=null, action){
    switch (action.type) {
        case 'SIGN_IN':
            return action.user; 
        case 'SIGN_OUT':
            return null
        default:
            return state;
    }
}

let rootReducer = combineReducers({
    token: tokenReducer,
    user: userReducer
});

//enhancer = potenciador
let rootEnhancer = compose(persistState('token')) //guarda el token en localstorage

export default createStore(rootReducer, {}, rootEnhancer);
