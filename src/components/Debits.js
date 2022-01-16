import React,{useState,useEffect} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import axios from 'axios'

function Debits(){
    const [debittrans,setDebittrans]=useState([]);
    const getData = async()=>{
        let url="https://moj-api.herokuapp.com/debits";
        await axios.get(url)
        .then(response=>{
            setDebittrans(response.data);
        })
    };
    useEffect(()=>{
        getData();
    },[])
    const renderdata=()=>{
        debittrans.map((element)=>{
            return(
                <div key={element} className="debit">
                    <h1>Purchase: {element.description}</h1>
                    <h2>Price:  ${element.amount}</h2>
                    <p>Purchase Date: {element.date.substring(0,10)} </p>
                </div>
            )
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        let amt = parseFloat(document.getElementById("Amount").value);
        let dsc = document.getElementById("Description").value;
        let date= new Date();
        date= `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        let thistrans = {amount:amt,description:dsc,date:date};
        debittrans.push(thistrans);
        console.log(debittrans);
    }
        return(
            <div>
                <div className="d-flex flex-column justify-content-center">
                    <h1>Debits Page</h1>
                    <br></br>
                    <div className="container addition">
                    <form className="amt_dsc" onSubmit={handleSubmit}>
                        <label>Amount:</label>
                        <input id="Amount" required type="number" step="any"/><br></br>
                        <label>Description:</label>
                        <input id="Description" required type="text"/><br/>
                        <button className="Add to Debit List" type="submit">Submit</button>
                    </form>
                    <Link to="/">HomePage</Link>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-right" id="debtList">
                    <h2 id="deblist"><u>List of Debits</u></h2>
                    {   
                        debittrans.map((element)=>{
                            return(
                                <div key="1" className="debit">
                                    <h1>Purchase: {element.description}</h1>
                                    <h2>Price:  ${element.amount}</h2>
                                    <p>Purchase Date: {element.date.substring(0,10)} </p>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    Under the List of Debits
                </div>
            </div>
        )}
export default Debits;