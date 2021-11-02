import Expenses from './Expenses'

function Budget(props) {

    const {users,setActive,userCurrentAccNumber,usersIndex} = props
    let userExpenses = JSON.parse(localStorage.getItem(`expenses_${userCurrentAccNumber}`))
    let newBalance = users[usersIndex].balance

    function deleteExpense(e){
        console.log(e.target.id)
        userExpenses.reverse().splice(e.target.id,1)
        userExpenses.reverse()
        localStorage.setItem(`expenses_${userCurrentAccNumber}`,JSON.stringify(userExpenses))
        if(userExpenses.length===0){
            localStorage.removeItem(`expenses_${userCurrentAccNumber}`)
        }
        setActive("ExpenseDeleted")
    }


    if(userExpenses!==null){
        for(let i=0;i<userExpenses.length;i++){
            newBalance = newBalance - userExpenses[i].expenseAmount
        }
    }

    function showUserInformation(){
        setActive("UserInformation")
    }

    function showAddExpensePage(){
        setActive("AddExpense")
    }

    return (
        <>
            <div className="py-5 m-6 fade-in bg-white border-l-4 border-solid border-pink-600 text-center">
                <h1 className="text-2xl">Projected Balance</h1>
                <span className="text-xl">{`₱ ${newBalance}`}</span>
            </div>
            <Expenses deleteExpense={deleteExpense} showAddExpensePage={showAddExpensePage} userCurrentAccNumber={userCurrentAccNumber}/>
            <div className="w-full text-center py-4">
            <i className="fa fa-arrow-left cursor-pointer" onClick = {showUserInformation}> GO BACK</i>
            </div>
        </>
    )
}

export default Budget
