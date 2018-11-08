import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typografy from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import Login from '../Login';

class AppNav extends Component{
    render(){
        return (
            <div>
                <AppBar position='static'>
                    <Toolbar>
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
    grow: {flexGrow:1, textAlign:'left'}
})(AppNav);
