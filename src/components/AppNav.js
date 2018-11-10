import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typografy from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import Login from '../containers/Login';

class AppNav extends Component{
    render(){
        return (
            <div>
                <AppBar position='static'>
                    <Toolbar className={this.props.classes.nav}>
                        <Typografy variant="h6" component="h1" className={this.props.classes.grow}>
                            Albums
                        </Typografy>
                        <Login/>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles({
    grow: {flexGrow:1, textAlign:'left'},
    nav: {
        color: 'white'
    }
})(AppNav);
