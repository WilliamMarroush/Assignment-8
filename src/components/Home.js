import React,{Component} from 'react'
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
 class Home extends Component{
     render(){
    return (
        <div>
            <img src="https://communitybank.net/wp-content/uploads/2015/12/bank-icon-300x300.jpg" alt="bank"/>
            <h1>Bank of React</h1>
            <Link to="/UserProfile">User Profile</Link>
            <br></br>
            <Link to="/login">Log in Page</Link>
            <br></br>
            <Link to="/Debits">Debits Page</Link>
            <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    )
     }
}

export default Home;
