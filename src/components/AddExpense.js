import {useState} from 'react'

function AddExpense(props) {
    const {setActive,userCurrentAccNumber} = props

    const [expense, setExpense] = useState("")
    function getAmount(val){
        let expense = val.target.value
        let regex = /^[0-9\b]+$/
        if(expense === '' || expense.match(regex)){
            setExpense(expense)
        }
    }

    const [expDetails, setExpDetails] = useState("")
    function getDetails(val){
        let expDetails = val.target.value
        let regex = /^[A-Za-z ]+$/
        if(expDetails === '' || expDetails.match(regex)){
            setExpDetails(expDetails)
        }
    }

    function addExpense(){
        if(expense!=="" && expDetails!==""){
            let currentExpense = JSON.parse(localStorage.getItem(`expenses_${userCurrentAccNumber}`))
            if(currentExpense===null){
                const current = new Date()
                const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
                localStorage.setItem(`expenses_${userCurrentAccNumber}`, JSON.stringify([{"timeExpenseAdded": date, "expenseDetails": expDetails, "expenseAmount": expense}]))
            } else {
                const current = new Date()
                const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
                currentExpense.push({"timeExpenseAdded": date, "expenseDetails": expDetails, "expenseAmount": expense})
                localStorage.setItem(`expenses_${userCurrentAccNumber}`,JSON.stringify(currentExpense))
            }
            setActive("ExpenseAdded")
        }
    }

    function showBudgetPage(){
        setActive("Budget")
    }

    return (
        <>
            <div className="py-5 m-6 fade-in bg-white border-l-4 border-solid border-pink-600 text-center">     
                <fieldset className="my-3">
                    <label>Expense Details: </label>
                    <input autoComplete="off" type="text" id="expDetails" name="expDetails" className="mx-2 border-b-2 border-solid border-pink-600" onChange={getDetails} value={expDetails} ></input>
                </fieldset>
                <fieldset className="my-3">
                    <label>Expense Amount: </label>
                    <input autoComplete="off" type="text" id="expense" name="expense" className="mx-2 border-b-2 border-solid border-pink-600" onChange={getAmount} value={expense} ></input>
                </fieldset>
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 border border-pink-700 rounded w-40 m-auto" onClick={addExpense}>
                    Add Expense
                </button>
            </div>
            <div className="w-full py-5 text-center fade-in">
                <i className="fa fa-arrow-left cursor-pointer" onClick = {showBudgetPage}> GO BACK</i>
            </div>
        </>
    )
}

export default AddExpense
