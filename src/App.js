import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Debits from './components/Debits';
function App (){
  const [userName,setUsername]=useState("default_username");
  const [password,setPassword]=useState("default_password");
  const [memberSince,setMembersince]=useState("01/01/0001");
  const [debittrans,setDebittrans]=useState([]);
  const [accountbalance,setAccountbalance]=useState(0);
  const [truthval,setTruthval]=useState(false);
  const accountBalancesetter=(e)=>{
    let copy=accountbalance;
    e.map((element,idx)=>{
        copy+=element.amount;
    })
    setAccountbalance(copy);
  };
  const getData = async()=>{
    let url="https://moj-api.herokuapp.com/debits";
    await axios.get(url)
    .then(response=>{
        setDebittrans(response.data);
        accountBalancesetter(response.data);
    })
  };
  useEffect(()=>{
      getData();
  },[])
  console.log(debittrans);
  console.log(accountbalance);
  const mockLogIn = (logInInfo)=>{
    setUsername(logInInfo.userName);
  }
  const HomeComponent =()=>(<Home accountbalance={accountbalance}/>)
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
          <Route exact path="/Debits" element={<Debits debittrans = {debittrans} setDebittrans={setDebittrans} accountbalance={accountbalance} setAccountbalance = {setAccountbalance}/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;