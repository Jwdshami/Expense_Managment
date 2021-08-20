import React, { createContext, useReducer } from "react";
import TransactionReducer from './transReducer';

const intialtransactions = [
    { amount: 500, desc: "Cash" }, { amount: -40, desc: "Book" }, { amount: -200, desc: "Camera" }
]

export const Transactionconext = createContext(intialtransactions);



export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, intialtransactions)

    function addTransaction(transobj) {
        dispatch({
            type: "ADD_TRANSACTION",
            playload: {
                amount: transobj.amount,
                desc: transobj.desc
            },

        })

    }

    function deletetransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            playload: id

        });

    }
    return ( <
        Transactionconext.Provider value = {
            {
                transactions: state,
                addTransaction,
                deletetransaction
            }

        } > { children } <
        /Transactionconext.Provider>
    )
}