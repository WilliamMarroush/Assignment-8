import React,{useEffect} from 'react'
import {Link,Navigate} from 'react-router-dom';

function UserProfile(props){        
    const {truthval,setTruthval}=props;
    const logout=()=>{
        setTruthval(false);
        return <Navigate to='../login'/>;
    }
    const checkin=()=>{
        if (!truthval){
            return <Navigate to='../login'/>
        }
    }
    useEffect(()=>{
        checkin();
    },[])
    return(
    <div>
        <h1>User Profile</h1>

        <div>Username: {props.userName}</div>
        <div>Member Since: {props.memberSince}</div>
        <button onClick={logout}>Log Out</button>
        <Link to="/">HomePage</Link>
    </div>
    );
}
export default UserProfile;
