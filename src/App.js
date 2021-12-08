import React, {useState} from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

let DUMMY_EXPENSES = [
    {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14),},
    {id: 'e2', title: 'Car Insurance', amount: 45.12, date: new Date(2021, 7, 14),},
    {id: 'e3', title: 'Paper', amount: 258.12, date: new Date(2019, 7, 14),},
    {id: 'e4', title: 'Pen', amount: 87.12, date: new Date(2018, 7, 14),},
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const [filterExpenses, setFilterExpenses] = useState(expenses);

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    }

    const filterByYear = (year) => {
        setFilterExpenses(expenses.filter((expense) => expense.date.getFullYear() == year));
    }

    return (
        <div>
            <h2>Let's get started!</h2>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={filterExpenses} onFilter={filterByYear}/>
        </div>
    );
}

export default App;
