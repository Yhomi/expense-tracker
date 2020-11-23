import * as actions from './actions'; 

const ExpenseReducer = (state,action) =>{
    switch (action.type){
        case actions.GET_TRANSACTION:
            return{
                ...state,
                transactions:action.payload,
                loading:false
            }
        case actions.TRANSACTION_ERROR:
            return{
                ...state,
                transaction:[],
                loading:true,
                errors:action.payload
            }
        case actions.DELETE_TRANSACTION:
            return{
                ...state,
                transactions: state.transactions.filter(transaction=>transaction._id !== action.payload)
            }
        case actions.ADD_TRANSACTION:
            return{
                ...state,
                transactions:[...state.transactions,action.payload]
            }
        default : return state
    }

}
export default ExpenseReducer;