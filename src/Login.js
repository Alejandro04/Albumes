import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import firebase from './initializers/firebase';

export default class Login extends Component{

    constructor(props){
        super(props)
        this.login = this.login.bind(this)
    }
    
    login(){
        let provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then(result=>{ //se puede iniciar con un rendirect tambien
            console.log(result)
        })
    }

    render(){
        return (
            <div>
                <Button variant="contained" onClick={this.login} >
                    Login with Google
                </Button>
            </div>
        )
    }
}
