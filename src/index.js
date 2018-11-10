import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import firebase from './initializers/firebase';
import { setUser, clearUser } from './initializers/actions';
import store from './initializers/store';

firebase.auth().onAuthStateChanged((user) =>{
    if(user){
        //login on
        store.dispatch(setUser(user))
    }else{  
        //login off
        store.dispatch(clearUser())
    }
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
