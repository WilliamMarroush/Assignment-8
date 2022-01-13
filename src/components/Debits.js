import React,{Component,useState} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

function Debits() {
    let debtotal;
    let value1=null;
    const debtlist=["key1",value1];

    const handleSubmit = (e)=>{
        let amt = e.amt_dsc.Amount.value;
        let dsc = e.amt_dsc.Description.value;
        debtlist.push(dsc,amt);
    }
        return(
            <div>
                <div className="d-flex flex-column justify-content-center">
                    <h1>Debits Page</h1>
                    <br></br>
                    <div className="container addition">
                    <form className="amt_dsc">
                        <label>Amount:</label>
                        <input className="Amount" type="text"/><br></br>
                        <label>Description:</label>
                        <input className="Description" type="text"/><br/>
                        <button className="Add to Debit List" onClick={handleSubmit}>Submit</button>
                    </form>
                    <Link to="/">HomePage</Link>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-right" id="debtList">
                    <h2><u>List of Debits</u></h2>
                    {
                        Object.entries(debtlist).forEach(([key,value])=>{
                            return(
                                <div>
                                    Description:  {key}<br/>
                                    Debit Amount: ${value}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )


}
export default Debits;