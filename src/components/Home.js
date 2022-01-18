import React from 'react'
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
function Home(props){
    const {accountbalance,setAccountbalance}=props;
    return (
        <div>
            <div>
            <Link to="/UserProfile">User Profile</Link>
            </div>
            <img src="https://communitybank.net/wp-content/uploads/2015/12/bank-icon-300x300.jpg" alt="bank"/>
            <h1>Bank of React</h1>
            <br></br>
            <Link to="/login">Log in Page</Link>
            <br></br>
            <Link to="/Debits">Debits Page</Link>
            <br/>
            <Link to="/Credits">Credits Page</Link>
            <AccountBalance accountBalance={accountbalance}/>
        </div>
    )
}
export default Home;
