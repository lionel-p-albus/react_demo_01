import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../ui/Card";
import {useState} from "react";
import ExpensesFilter from "../filterExpense/ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpense = props.items.filter(expense => {
        return expense.date.getFullYear() == filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {filteredExpense.map((item) => (
                        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
                    )
                )}
            </Card>
        </div>
    );
}

export default Expenses;