import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import firebase from './initializers/firebase';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';

class Login extends Component{

    constructor(props){
        super(props)
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)

        this.state = {
            userLoggedIn: false,
            photoURL: ''
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                //login on
                this.setState({
                    userLoggedIn: true,
                    photoURL: user.providerData[0].photoURL
                })
            }else{  
                //login off
                this.setState({
                    userLoggedIn: false,
                    photoURL: ''
                })
            }
        })
    }

    logInButton(){
        if(this.state.userLoggedIn) return (
            [
                <Avatar src={this.state.photoURL}/>,
                (<IconButton color="inherit" onClick={this.logout}><ExitToApp/></IconButton>)
            ]
        )

        return (
            <Button variant="contained" onClick={this.login} >
                Login with Google
            </Button>
        )
    }
    
    login(){
        let provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly')

        firebase.auth().signInWithPopup(provider).then(result=>{ //se puede iniciar con un rendirect tambien
            console.log(result)

            let token = result.credential.accessToken
            console.log(token)
        }).catch(err =>{
            console.log(err)
        })
    }

    logout(){
        firebase.auth().signOut().then()
    }

    render(){
        return (
            <div className={this.props.classes.container}>
                {this.logInButton()}
            </div>
        )
    }
}

export default withStyles({
    container: {
        display: 'flex',
        flexDirection: 'row'
    }
})(Login)
