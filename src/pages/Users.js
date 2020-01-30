import React, {Component} from 'react';

import { Container, Grid } from '@material-ui/core';

import Card from '../components/Card';
import Dialog from '../components/Dialog';

import './css/UsersStyles.css';

import users from '../assets/json/users.json';


class Users extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: [],
            showDialog: false,
            userDialog: {}
        };
    }

    async getUsers(){
        this.setState({users});
    }

    dispatchDialog(userDialog){
        this.setState({
            showDialog: true,
            userDialog
        });
    }

    closeDialog(){
        this.setState({
            showDialog: false
        });
    }

    componentDidMount(){
        this.getUsers();
    }

    render(){
        return (
            <Container className="container">
                { this.state.users.map( (user, index) =>
                    (<Grid item xs={12} sm={6} md={4} key={index}>
                        <Card user={user} dispatchDialog={(user) => this.dispatchDialog(user)}/>
                    </Grid>)
                )}
                { this.state.showDialog && <Dialog user={this.state.userDialog} closeDialog={() => this.closeDialog()} />}
            </Container>
        ) 
    }
}

export default Users;