import React,{useReducer} from 'react';
import ExpenseContext from './ExpenseContext';
import ExpenseReducer from './ExpenseReducer';
import * as action from './actions'; 
import axios from 'axios';

const ExpenseState = props =>{
    const initialState = {
        transactions : [],
        errors :null,
        loading:false
    }

    const [state, dispatch] = useReducer(ExpenseReducer, initialState);

    // get all transaction 
    const getTransactions = async ()=>{
        try {
            const res = await axios.get('/api/transactions/');
            dispatch({
                type:action.GET_TRANSACTION,
                payload:res.data.data
            })
        } catch (err) {
            dispatch({
                type:action.TRANSACTION_ERROR,
                payload:err.response.data.error
            })
        }
    }

    // delete transaction
    const deleteTransaction = async(id)=>{
        try {
            await axios.delete(`/api/transactions/${id}`);
            dispatch({
                type:action.DELETE_TRANSACTION,
                payload:id
            })
        } catch (err) {
            dispatch({
                type:action.TRANSACTION_ERROR,
                payload:err.response.data.error
            })
        }
        
    }

    // add transaction
    const addTransaction = async(transaction)=>{
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        try {
            const res = await axios.post('/api/transactions/',transaction,config)
            dispatch({
                type:action.ADD_TRANSACTION,
                payload:res.data.data
            })
        } catch (err) {
            dispatch({
                type:action.TRANSACTION_ERROR,
                payload:err.response.data.error
            })
        }
        
    }

    return(
        <ExpenseContext.Provider value={
            {
                transactions:state.transactions,
                errors: state.errors,
                loading:state.loading,
                deleteTransaction,
                addTransaction,
                getTransactions,
            }
        }>
            {props.children}
        </ExpenseContext.Provider>
    )
} 

export default ExpenseState;