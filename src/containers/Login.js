import React, { Component } from 'react';
import firebase from '../initializers/firebase';

import { connect } from 'react-redux';
import { saveToken, clearToken } from '../initializers/actions';

import AuthElements from '../components/AuthElements';


class Login extends Component{

    constructor(props){
        super(props)
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }

    componentDidMount(){
        console.log(this.props.token)
    }

    login(){
        let provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly')

        firebase.auth().signInWithPopup(provider).then(result=>{ //se puede iniciar con un rendirect tambien
            console.log(result)

            let token = result.credential.accessToken
            this.props.saveToken(token)
            console.log(token)
        }).catch(err =>{
            console.log(err)
        })
    }

    logout(){
        firebase.auth().signOut().then(() => {
            this.props.clearToken()
        })
    }

    render(){
        return (
            <AuthElements
                login={this.login}
                logout={this.logout}
                token={this.props.token}
                user={this.props.user}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token,
        user: state.user
    }
} 

const mapDispatchToProps = {
    saveToken,
    clearToken
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);