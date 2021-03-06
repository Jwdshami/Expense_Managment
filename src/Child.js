import React, {
    useContext,
    useState
} from 'react';
import {
    Transactionconext
} from './transactionconext';


function Child() {

    let {
        transactions,
        addTransaction
    } = useContext(Transactionconext);
    const { deletetransaction } = useContext(Transactionconext)
    let [newid] = useState(1)
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) => {
        event.preventDefault();

        if (Number(newAmount) === 0) {
            alert("Please enter the correct value ");
            return false;
        }

        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });
        setDesc('');
        setAmount(0)
    }
    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount


        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }


    return ( <
        div className = "container" >

        <
        h1 className = "text-centre" > Expense Tracker < /h1> <
        h3 > Your Balance < br / > $ {
            getIncome() + getExpense()
        } < /h3>

        <
        div className = "expense-container" > <
        h3 > INCOME < br / > $ {
            getIncome()
        } < /h3><
        h3 > EXPENSE < br / > $ {
            getExpense()
        } < /h3>    < /
        div >
        <
        h3 > History < /h3> <
        hr / >



        <
        ul className = "transaction-list" >

        {
            transactions.map((transobj, ind) => {
                return ( <
                    li key = {
                        ind
                    } >
                    <
                    span > {
                        transobj.desc
                    } < /span>  <
                    span > $ {
                        transobj.amount
                    } < /span> <
                    button onClick = {
                        () => deletetransaction(transobj.id)
                    }
                    className = "delete-btn" > X < /button>


                    <
                    /li>
                )

            })
        }

        <
        /ul> <
        h3 > Add New Transaction < /h3> <
        hr / >

        <
        form className = "transaction-form"
        onSubmit = {
            handleAddition
        } >

        <
        lable >
        Enter Description < br / >
        <
        input type = "text"
        value = { newDesc }
        placeholder = "Description"
        onChange = {
            (ev) => setDesc(ev.target.value)
        }
        required / >

        <
        /lable>

        <
        br / >
        <
        lable >
        Enter Amount < br / >
        <
        input type = "number"
        value = { newAmount }
        placeholder = "Amount"
        onChange = {
            (ev) => setAmount(ev.target.value)
        }
        required / >


        <
        /lable> <
        br / >
        <
        input type = "submit"
        name = ""
        value = "Add Transaction " / >
        <
        /form>


        <
        /
        div >
    );
}

export default Child;