import React, { Component } from 'react';
import {Navigate,Link} from 'react-router-dom';

function LogIn(props){
    const {user,setUser}=props;
    const {truthval,setTruthval}=props;

    const handleSignIn=(e)=>{
        e.preventDefault();
        let uname = document.getElementById("userName").value;
        let pass = document.getElementById("password").value;

        if (uname==user.username){
            if (pass==user.password){
                return(<Navigate to="/UserProfile"/>)
            }
        }
    }
    const handleSignUp=(e)=>{
        e.preventDefault();
        let uname = document.getElementById("userName").value;
        let pass = document.getElementById("password").value;
        let date= new Date();
        date= `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        let tempuser = (user);
        tempuser.username=uname;
        tempuser.password=pass;
        tempuser.memberSince=date;
        setUser(tempuser);
    }
    if (truthval){
        return(<Navigate to="/userProfile"/>);
    }
    return(
        <div className="container d-flex d-column justify-content-center login-holder">
            <form>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" id="userName"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password"/>
                </div>
                <button type="submit" className="sign-in" onClick={handleSignIn}>Sign in</button>
                OR
                <button type="submit" className="sign-up" onClick={handleSignUp}>Sign up</button><br/>
                <Link to="/">HomePage</Link>
            </form>
        </div>
    )
} 
export default LogIn;