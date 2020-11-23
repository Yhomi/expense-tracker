import React,{useContext} from 'react';
import ExpenseContext from '../context/ExpenseContext';
import {numberWithCommas} from '../utility/format';

const IncomeExpenses = () => {
  const context = useContext(ExpenseContext)
  const {transactions} = context;
  const amounts = transactions.map(transaction=>transaction.amount)
  const income = amounts.filter(amount=>amount > 0).reduce((a,b)=>(a +=b),0).toFixed(2)
  const expenses = amounts.filter(amount=> amount < 0).reduce((a,b)=>(a +=b),0).toFixed(2)
    return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${numberWithCommas(income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${numberWithCommas(expenses)}</p>
        </div>
    </div>
    )
}

export default IncomeExpenses
