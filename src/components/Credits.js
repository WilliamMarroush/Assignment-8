import React from 'react';
import {Link} from 'react-router-dom';
export default function Credits(props) {
    const {accountbalance,setAccountbalance}=props;
    const {credittrans,setCredittrans}=props;
    const handleSubmit = (e)=>{
        e.preventDefault();
        let amt = parseFloat(document.getElementById("Amount").value);
        let dsc = document.getElementById("Description").value;
        let date= new Date();
        date= `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        let thistrans = {amount:amt,description:dsc,date:date};
        let copy = [...credittrans];
        copy.push(thistrans);
        setCredittrans(copy);
        setAccountbalance((amount)=> amount+=amt);
    }
    return (
        <div>
            <div className="d-flex flex-column justify-content-center">
                <h1>Credits Page</h1>
                <br></br>
                <div className="container addition">
                <form className="amt_dsc" onSubmit={handleSubmit}>
                    <label>Amount:</label>
                    <input id="Amount" required type="number" step="any"/><br></br>
                    <label>Description:</label>
                    <input id="Description" required type="text"/><br/>
                    <button className="Add to Debit List" type="submit">Submit</button>
                </form>
                <div>
                    Account Balance: ${accountbalance}
                </div>
                </div>
                <Link to="/">HomePage</Link>
                <div className="d-flex flex-column justify-content-right" id="debtList">
                <h2 id="deblist" className="d-flex flex-row justify-content-between">
                    <u>Credits</u>
                    <u>Price</u>
                    <u>Date of Credit</u>
                    </h2>
            </div>
            {
                credittrans.map((piece,idx)=>{
                    return(
                        <div key={idx} className="d-flex flex-direction:column-reverse debit justify-content-between">
                            <h2>{piece.description}</h2><br/>
                            <h3>Price:  ${piece.amount}</h3><br/>
                            <p>Date: {piece.date.substring(0,10)} </p><br/>
                            <br/><br/>
                        </div>
                    )})
            }
            </div>
        </div>
    )
}
