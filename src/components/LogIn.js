import React, { Component } from 'react';
import {Navigate,Link} from 'react-router-dom';

class LogIn extends Component {
    constructor () {
      super()
      this.state = {
        user: {
          userName: '',
          password: ''
        },
        redirect: false
      }
    }
    handleChange=(e)=>{
        const updatedUser={...this.state.user};
        const inputField=e.target.name;
        const inputValue=e.target.value;
        updatedUser[inputField]=inputValue;
        this.setState({user:updatedUser});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.mockLogIn(this.state.user);
        this.setState({redirect:true});
    }
    render(){
        if (this.state.redirect){
            return(<Navigate to="/userProfile"/>);
        }
        return(
            <div className="container d-flex d-column justify-content-center">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password"/>
                    </div>
                    <Link to="/">HomePage</Link>
                </form>
            </div>
        )
    }
} 
export default LogIn;