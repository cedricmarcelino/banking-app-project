function ExpenseAdded(props) {
    const {setActive} = props

    function showBudgetPage(){
        setActive("Budget")
    }

    return (
        <div className="w-full py-5 text-center fade-in">
            <span>Expense Added Sucessfully!</span><br></br>
            <i className="fa fa-arrow-left cursor-pointer" onClick = {showBudgetPage}> GO BACK</i>
        </div>
    )
}

export default ExpenseAdded
