import React, {useState} from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const App = () => {
    // let expenses = [
    //     {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14),},
    //     {id: 'e2', title: 'Car Insurance', amount: 45.12, date: new Date(2021, 7, 14),},
    //     {id: 'e3', title: 'Paper', amount: 258.12, date: new Date(2019, 7, 14),},
    //     {id: 'e4', title: 'Pen', amount: 87.12, date: new Date(2018, 7, 14),},
    // ];

    const [expenses, setExpenses] = useState([
        {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14),},
        {id: 'e2', title: 'Car Insurance', amount: 45.12, date: new Date(2021, 7, 14),},
        {id: 'e3', title: 'Paper', amount: 258.12, date: new Date(2019, 7, 14),},
        {id: 'e4', title: 'Pen', amount: 87.12, date: new Date(2018, 7, 14),},
    ]);

    const addExpenseHandler = (expense) => {
        console.log('In App.js');
        console.log(expenses);
        // console.log(expenses);
        // const ex = {...expense, date: new Date(expense.date.year, expense.date.month, expense.date.day) };
        // console.log(expenses.(expense));
        // setExpenses({...expenses, ...expense});
        // setExpenses((prevState) => {
        //     console.log([...prevState, expense]);
        //     return [...prevState, expense];
        // });
    }

    return (
        <div>
            <h2>Let's get started!</h2>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
