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
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpense.length > 0) {
        expensesContent = filteredExpense.map((item) => (
                <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
            )
        );
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {/*{filteredExpense.length === 0 && <p>No expenses found.</p>}*/}
                {/*{filteredExpense.length > 0 && filteredExpense.map((item) => (*/}
                {/*        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>*/}
                {/*    )*/}
                {/*)}*/}
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;