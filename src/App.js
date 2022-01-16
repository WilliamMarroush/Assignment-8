import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Debits from './components/Debits';
function App (){
  const [userName,setUsername]=useState("");
  const [memberSince,setMembersince]=useState("");
  const [accountBalance,setAccountbalance]=useState(0);

  const mockLogIn = (logInInfo)=>{
    setUsername(logInInfo.userName);
  }
  const HomeComponent =()=>(<Home accountBalance={accountBalance}/>)
  const UserProfileComponent = ()=>(
      <UserProfile userName={userName} memberSince={memberSince}/>
  )
  const LogInComponent = ()=>(
      <LogIn user={{userName:userName,memberSince:memberSince}} mockLogIn={mockLogIn}/>)
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
export default App;
