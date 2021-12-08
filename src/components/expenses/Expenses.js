import './Expenses.css';
import Card from "../ui/Card";
import {useState} from "react";
import ExpensesFilter from "../filterExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesList items={filteredExpense}/>
            </Card>
        </div>
    );
}

export default Expenses;