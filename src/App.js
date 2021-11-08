import ExpenseItem from "./components/ExpenseItem";

function App() {
    const param = document.createElement('p');
    param.textContent = 'This is also visible';
    document.getElementById('root').append(param);
    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem></ExpenseItem>
        </div>
    );
}

export default App;
