import React from 'react';
import './App.css';
import Child from './Child';
import { TransactionProvider } from './transactionconext';


function App() {
    return (

        <
        TransactionProvider >
        <
        Child / >
        <
        /TransactionProvider>


    );
}

export default App;