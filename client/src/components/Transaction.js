import React,{useContext} from 'react';
import ExpenseContext from '../context/ExpenseContext';
import {numberWithCommas} from '../utility/format';

const Transaction = (props) => {
    const context = useContext(ExpenseContext);
    const {deleteTransaction} = context;
    const {text,amount,_id} = props.transaction;
    const sign = amount < 0 ? '-' : '+';
    return (
        <li className={amount < 0 ? 'minus' : 'plus'}>
            {text} <span>{sign}${numberWithCommas(Math.abs(amount))}</span><button onClick={()=>deleteTransaction(_id)} className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
