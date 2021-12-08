import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../ui/Card";
import {useState} from "react";
import ExpensesFilter from "../filterExpense/ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        props.onFilter(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {props.items.map((item) => (
                        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
                    )
                )}
            </Card>
        </div>
    );
}

export default Expenses;