import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Debits from './components/Debits';
class App extends Component {
  constructor(){
    super();
    this.state={
      accountBalance:14568.27,
      currentUser:{
        userName:'bob_outlaw',
        memberSince:'08/23/99',
      }
    }
  }
  mockLogIn = (logInInfo)=>{
    const newUser={...this.state.currentUser};
    newUser.userName=logInInfo.userName;
    this.setState({currentUser:newUser});
  }
  render(){
    const HomeComponent =()=>(<Home accountBalance={this.state.accountBalance}/>)
    const UserProfileComponent = ()=>(
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>
    )
    const LogInComponent = ()=>(
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    const DebitsComponent=()=>{
      <Debits></Debits>
    }
      return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeComponent/>}/>
          <Route exact path="/UserProfile" element={<UserProfileComponent/>}/>
          <Route exact path="/login" element={<LogInComponent/>}/>
          <Route exact path="/Debits" element={<Debits/>}/>
        </Routes>
      </Router>
    </div>
  );
  }
}
export default App;
