import React from "react";
import Expenses from "./components/expenses/Expenses";

const App = () => {
    const expenses = [
        {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14),},
        {id: 'e2', title: 'Car Insurance', amount: 45.12, date: new Date(2021, 7, 14),},
        {id: 'e3', title: 'Paper', amount: 258.12, date: new Date(2019, 7, 14),},
        {id: 'e4', title: 'Pen', amount: 87.12, date: new Date(2018, 7, 14),},
    ];

    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses items={expenses}/>
        </div>
    );
    // return React.createElement('div', {},
    //     React.createElement('h2', {}, 'Let\'s get started!'),
    //     React.createElement(Expenses, {items: expenses}),
    // );
}

export default App;
