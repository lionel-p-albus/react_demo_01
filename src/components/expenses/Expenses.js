import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../ui/Card";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.items.map((item) => {
                return <ExpenseItem title={item.title} amount={item.amount} date={item.date}></ExpenseItem>;
            })}
        </Card>
    );
}

export default Expenses;