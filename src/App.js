import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Debits from './components/Debits';
import Credits from './components/Credits';
function App (){
  const [userName,setUsername]=useState("default_username");
  const [password,setPassword]=useState("default_password");
  const [memberSince,setMembersince]=useState("01/01/0001");
  const [debittrans,setDebittrans]=useState([]);
  const [credittrans,setCredittrans]=useState([]);
  const [accountbalance,setAccountbalance]=useState(0);
  const [truthval,setTruthval]=useState(false);
  const accountBalancedebitsetter=(e)=>{
    let copy=accountbalance;
    e.map((element,idx)=>{
        copy-=element.amount;
    })
    setAccountbalance(copy);
  };
  const accountBalancecreditsetter=(e)=>{
    let copy=accountbalance;
    e.map((element,idx)=>{
      copy+=element.amount;
    })
    setAccountbalance(copy);
  }
  const getData = async()=>{
    let url="https://moj-api.herokuapp.com/debits";
    await axios.get(url)
    .then(response=>{
        setDebittrans(response.data);
        accountBalancedebitsetter(response.data);
    })
    url="https://moj-api.herokuapp.com/credits";
    await axios.get(url)
    .then(response=>{
      setCredittrans(response.data);
      accountBalancecreditsetter(response.data);
    })
  };
  useEffect(()=>{
      getData();
  },[])
  const mockLogIn = (logInInfo)=>{
    setUsername(logInInfo.userName);
  }
  const HomeComponent =()=>(<Home accountbalance={accountbalance}/>)
  const UserProfileComponent = ()=>(
      <UserProfile truthval={truthval} setTruthval={setTruthval} userName={userName} memberSince={memberSince}/>
  )
  const LogInComponent = ()=>(
      <LogIn truthval={truthval} setTruthval={setTruthval} userName={userName} password = {password} setUsername = {setUsername} setPassword = {setPassword} mockLogIn={mockLogIn} memberSince={memberSince} setMembersince={setMembersince}/>)
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeComponent/>}/>
          <Route exact path="/UserProfile" element={<UserProfileComponent/>}/>
          <Route exact path="/login" element={<LogInComponent/>}/>
          <Route exact path="/Debits" element={<Debits debittrans = {debittrans} setDebittrans={setDebittrans} accountbalance={accountbalance} setAccountbalance = {setAccountbalance}/>}/>
          <Route exact path="/Credits" element={<Credits accountbalance={accountbalance} setAccountbalance={setAccountbalance} credittrans={credittrans} setCredittrans={setCredittrans}/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;