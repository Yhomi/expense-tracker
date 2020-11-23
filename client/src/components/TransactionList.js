import React,{useContext,useEffect} from 'react';
import ExpenseContext from '../context/ExpenseContext';
import Transaction from './Transaction';

const TransactionList = () => {
    const context = useContext(ExpenseContext)
   const {transactions,getTransactions} = context;
   useEffect(()=>{
       getTransactions()
       // eslint-disable-next-line
   },[])
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction} />))}
                
            </ul>  
        </>
    )
}

export default TransactionList
