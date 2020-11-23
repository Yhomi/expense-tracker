import React,{useContext} from 'react';
import ExpenseContext from '../context/ExpenseContext';
import {numberWithCommas} from '../utility/format';

const Balance = () => {
    const context = useContext(ExpenseContext)
    const {transactions} = context;
    const amounts = transactions.map(transaction=>transaction.amount)
    const total = amounts.reduce((a,b)=>(a +=b),0).toFixed(2)
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${numberWithCommas(total)}</h1>
 
        </div>
    )
}

export default Balance
