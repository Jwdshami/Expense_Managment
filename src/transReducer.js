import React from 'react';
const TransactionReducer = ((state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            {
                return [action.playload, ...state]


            }
        case 'DELETE_TRANSACTION':

            return {...state,
                transobj: state.transobj.filter(transobj => transobj.id !== action.payload)
            }
        default:
            return state;
    }

})
export default TransactionReducer;