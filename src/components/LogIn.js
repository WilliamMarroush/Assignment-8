import React, { Component } from 'react';
import {Navigate,Link} from 'react-router-dom';

function LogIn(props){
    const {userName,setUsername}=props;
    const {password,setPassword}=props;
    const {truthval,setTruthval}=props;
    const {memberSince,setMembersince}=props;

    const handleSignIn=(e)=>{
        e.preventDefault();
        let uname = document.getElementById("userName").value;
        let pass = document.getElementById("password").value;
        console.log("uname=",uname,"username=",userName);
        console.log("pass=",pass,"password=",password);

        if (uname==userName && pass==password){
            return(<Navigate to="/UserProfile"/>)
        }
        else{
            return(<div>You logged in incorrectly</div>)
        }
    }

    const handleSignUp=(e)=>{
        e.preventDefault();
        let uname = document.getElementById("userName").value;
        console.log(uname);
        let pass = document.getElementById("password").value;
        let date= new Date();
        date= `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        setUsername(uname);
        setPassword(pass);
        setMembersince(date);
        return(<Navigate to="/UserProfile/"/>);
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