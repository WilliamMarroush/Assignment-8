import React,{Component,useState} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Debits extends Component{
    constructor(){
        super();
        this.state={
            debittrans:{
                debitamt:0,
                debitdesc:""
            }
        }
    }

    handleSubmit = (e)=>{
        let amt = e.amt_dsc.Amount.value;
        let dsc = e.amt_dsc.Description.value;
        this.setState(this.state.dbtamt,amt);
        this.setState(this.state.dbtdsc,dsc);
    }
    render(){
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
                        <button className="Add to Debit List" onClick={this.handleSubmit}>Submit</button>
                    </form>
                    <Link to="/">HomePage</Link>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-right" id="debtList">
                    <h2><u>List of Debits</u></h2>
                    {this.state.debittrans.debitamt}
                    {this.state.debittrans.debitdesc}
                </div>
            </div>
        )}


}
export default Debits;