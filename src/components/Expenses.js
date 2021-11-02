function Expenses(props) {
    const {userCurrentAccNumber} = props
    let userExpenses = JSON.parse(localStorage.getItem(`expenses_${userCurrentAccNumber}`))

    if(userExpenses!==null){

        return (
            <>
                <div className="m-6">
                    <span className="text-xl">Expenses</span>
                            <table className="table-fixed m-auto w-full">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Expense Details</th>
                                        <th>Amount</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        userExpenses.reverse().map((expense,index) => 
                                            
                                            <tr key={`expense_${index}`}>
                                                <td key="timeExpenseAdded">{expense.timeExpenseAdded}</td>
                                                <td key="expenseDetails">{expense.expenseDetails}</td>
                                                <td key="expenseAmount" className="text-center">{`-₱ ${parseInt(expense.expenseAmount)}`}</td>
                                                <td className="text-center"><i id={index} className='fas fa-trash-alt cursor-pointer' onClick={props.deleteExpense}></i></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                                
                            </table>
                </div>
                <div className="text-center">
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 border border-pink-700 rounded w-50 m-auto" onClick={props.showAddExpensePage}>
                        Add an Expense
                </button>
                </div>
            </>
        )

    } else {
        return (
            <>
                    <div className="m-6">
                        <span className="text-xl">Expenses</span>
                                <table className="table-fixed m-auto w-full">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Expense Details</th>
                                            <th>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                    
                                </table>
                    </div>
                    <div className="text-center">
                    <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 border border-pink-700 rounded w-50 m-auto" onClick={props.showAddExpensePage}>
                            Add an Expense
                    </button>
                    </div>
            </>
        )
    }
    
}

export default Expenses
